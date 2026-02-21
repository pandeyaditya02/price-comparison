"""
Dummy scraper for BigBasket.
Simulates network latency and returns data from the dummy catalog.
"""
import asyncio
import random
from typing import Optional


async def scrape_bigbasket(query: str, pincode: str) -> Optional[dict]:
    """Simulate scraping BigBasket with realistic network delay."""
    await asyncio.sleep(random.uniform(1.5, 2.5))
    return None
