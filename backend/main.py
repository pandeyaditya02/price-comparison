"""
QuickCompare Backend — FastAPI Entry Point
"""
import logging
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.v1.router import router as search_router
from cache.redis_client import cache

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(
    title="QuickCompare API",
    description="Real-time price comparison across Zepto, Instamart, Blinkit, and BigBasket",
    version="1.0.0",
)

# CORS — allow all origins for React Native dev
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API router
app.include_router(search_router, prefix="/api/v1", tags=["search"])


@app.on_event("startup")
async def startup():
    """Initialize services on startup."""
    await cache.connect()
    logger.info("QuickCompare API started successfully")


@app.get("/")
async def root():
    """Health check endpoint."""
    return {"status": "ok", "service": "QuickCompare API", "version": "1.0.0"}
