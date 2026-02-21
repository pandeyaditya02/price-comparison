# scrapers package
from .zepto import scrape_zepto
from .instamart import scrape_instamart
from .blinkit import scrape_blinkit
from .bigbasket import scrape_bigbasket

__all__ = ["scrape_zepto", "scrape_instamart", "scrape_blinkit", "scrape_bigbasket"]
