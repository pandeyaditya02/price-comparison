"""
Dummy scraper for Blinkit.
Simulates network latency and returns data from the dummy catalog.
"""
import asyncio
import random
from typing import Optional


async def scrape_blinkit(query: str, pincode: str) -> Optional[dict]:
    """Simulate scraping Blinkit with realistic network delay."""
    await asyncio.sleep(random.uniform(0.8, 1.8))
    return None
