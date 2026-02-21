"""
QuickCompare Backend — Pydantic Schemas
"""
from typing import Optional
from pydantic import BaseModel


class PlatformResult(BaseModel):
    platform: str
    price: float
    mrp: float
    in_stock: bool
    eta_mins: Optional[int] = None
    deep_link: Optional[str] = None


class SearchResponse(BaseModel):
    status: str
    product_name: str
    variant: str
    available_variants: list[str]
    image_url: str
    results: list[PlatformResult]


class MultiSearchResponse(BaseModel):
    status: str
    query: str
    products: list[SearchResponse]
