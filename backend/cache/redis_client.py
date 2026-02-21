"""
Redis cache client stub.
Provides 15-minute TTL caching structure for search results.
Optional for demo — falls back gracefully if Redis is not available.
"""
import json
import logging
from typing import Optional

logger = logging.getLogger(__name__)

# In production, this would be a real Redis connection
_cache: dict[str, dict] = {}


class RedisCache:
    """In-memory cache stub that mirrors the Redis interface for demo purposes."""

    def __init__(self):
        self._store: dict[str, str] = {}
        self._connected = False
        logger.info("Using in-memory cache stub (Redis not configured)")

    async def connect(self):
        """Attempt Redis connection; fall back to in-memory."""
        try:
            # In production: self._client = redis.asyncio.Redis(...)
            self._connected = True
            logger.info("Cache stub initialized")
        except Exception as e:
            logger.warning(f"Redis unavailable, using in-memory fallback: {e}")
            self._connected = True

    async def get(self, key: str) -> Optional[str]:
        """Get cached value by key."""
        return self._store.get(key)

    async def set(self, key: str, value: str, ttl: int = 900):
        """Set cached value with TTL (900s = 15 minutes, ignored in stub)."""
        self._store[key] = value

    async def get_search_results(self, query: str, pincode: str) -> Optional[dict]:
        """Get cached search results."""
        cache_key = f"search:{query.lower().strip()}:{pincode}"
        cached = await self.get(cache_key)
        if cached:
            logger.info(f"Cache HIT: {cache_key}")
            return json.loads(cached)
        logger.info(f"Cache MISS: {cache_key}")
        return None

    async def set_search_results(self, query: str, pincode: str, data: dict):
        """Cache search results with 15-minute TTL."""
        cache_key = f"search:{query.lower().strip()}:{pincode}"
        await self.set(cache_key, json.dumps(data), ttl=900)


# Singleton instance
cache = RedisCache()
