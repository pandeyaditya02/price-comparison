"""
Dummy scraper for Swiggy Instamart.
Simulates network latency and returns data from the dummy catalog.
"""
import asyncio
import random
from typing import Optional


async def scrape_instamart(query: str, pincode: str) -> Optional[dict]:
    """Simulate scraping Swiggy Instamart with realistic network delay."""
    await asyncio.sleep(random.uniform(1.2, 2.2))
    return None
