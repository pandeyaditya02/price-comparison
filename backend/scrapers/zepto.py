"""
Dummy scraper for Zepto.
Simulates network latency and returns data from the dummy catalog.
"""
import asyncio
import random
from typing import Optional


async def scrape_zepto(query: str, pincode: str) -> Optional[dict]:
    """Simulate scraping Zepto with realistic network delay."""
    # Simulate variable network latency (1.0 - 2.0 seconds)
    await asyncio.sleep(random.uniform(1.0, 2.0))

    # Data is resolved at the router level from the product catalog
    # This function signature exists for production parity
    return None
