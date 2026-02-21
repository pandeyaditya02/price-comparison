"""
QuickCompare Backend — Search API Router
GET /api/v1/search?query=...&pincode=...
"""
import asyncio
import logging
from fastapi import APIRouter, Query, HTTPException

from api.v1.schemas import PlatformResult, SearchResponse, MultiSearchResponse
from data.products import PRODUCTS, SEARCH_ALIASES
from scrapers import scrape_zepto, scrape_instamart, scrape_blinkit, scrape_bigbasket
from cache.redis_client import cache

logger = logging.getLogger(__name__)

router = APIRouter()


def _find_products(query: str) -> list[str]:
    """Find matching product keys from query using aliases and substring matching."""
    query_lower = query.lower().strip()

    # Direct alias match
    if query_lower in SEARCH_ALIASES:
        return [SEARCH_ALIASES[query_lower]]

    # Substring search across aliases and product names
    matches = set()
    for alias, product_key in SEARCH_ALIASES.items():
        if query_lower in alias or alias in query_lower:
            matches.add(product_key)

    for product_key in PRODUCTS:
        if query_lower in product_key or product_key in query_lower:
            matches.add(product_key)
        product_name = PRODUCTS[product_key]["product_name"].lower()
        if query_lower in product_name:
            matches.add(product_key)

    return list(matches)


@router.get("/search", response_model=MultiSearchResponse)
async def search_products(
    query: str = Query(..., min_length=1, description="Product search query"),
    pincode: str = Query("122001", description="Delivery pincode"),
):
    """
    Search for products across all platforms.
    Demo: Returns dummy data after simulating network latency.
    """
    logger.info(f"Search request: query='{query}', pincode='{pincode}'")

    # Check cache first
    cached = await cache.get_search_results(query, pincode)
    if cached:
        return cached

    # Find matching products
    product_keys = _find_products(query)

    if not product_keys:
        return MultiSearchResponse(
            status="success",
            query=query,
            products=[],
        )

    # Simulate concurrent scraping across all 4 platforms
    await asyncio.gather(
        scrape_zepto(query, pincode),
        scrape_instamart(query, pincode),
        scrape_blinkit(query, pincode),
        scrape_bigbasket(query, pincode),
    )

    # Build response from dummy catalog
    products = []
    for key in product_keys:
        product_data = PRODUCTS[key]
        variants = list(product_data["variants"].keys())
        default_variant = variants[0]
        variant_data = product_data["variants"][default_variant]

        products.append(
            SearchResponse(
                status="success",
                product_name=product_data["product_name"],
                variant=default_variant,
                available_variants=variants,
                image_url=product_data["image_url"],
                results=[PlatformResult(**r) for r in variant_data["results"]],
            )
        )

    response = MultiSearchResponse(
        status="success",
        query=query,
        products=products,
    )

    # Cache the results
    await cache.set_search_results(query, pincode, response.model_dump())

    return response


@router.get("/product/{product_key}/variant/{variant}")
async def get_variant(
    product_key: str,
    variant: str,
    pincode: str = Query("122001"),
):
    """Get specific variant data for a product."""
    product_key_lower = product_key.lower().strip()

    # Check aliases
    if product_key_lower in SEARCH_ALIASES:
        product_key_lower = SEARCH_ALIASES[product_key_lower]

    if product_key_lower not in PRODUCTS:
        raise HTTPException(status_code=404, detail="Product not found")

    product_data = PRODUCTS[product_key_lower]

    if variant not in product_data["variants"]:
        raise HTTPException(
            status_code=404,
            detail=f"Variant '{variant}' not found. Available: {list(product_data['variants'].keys())}",
        )

    variant_data = product_data["variants"][variant]

    return SearchResponse(
        status="success",
        product_name=product_data["product_name"],
        variant=variant,
        available_variants=list(product_data["variants"].keys()),
        image_url=product_data["image_url"],
        results=[PlatformResult(**r) for r in variant_data["results"]],
    )
