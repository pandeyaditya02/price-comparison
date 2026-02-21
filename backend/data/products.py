"""
QuickCompare Backend — Dummy Product Catalog
Realistic product data with multiple variants, varied pricing/stock/ETAs across platforms.
"""

PRODUCTS = {
    "amul butter": {
        "product_name": "Amul Butter - Pasteurised",
        "image_url": "https://cdn.grofers.com/assets/amul-butter.jpg",
        "variants": {
            "100g": {
                "results": [
                    {"platform": "Zepto", "price": 54.00, "mrp": 57.00, "in_stock": True, "eta_mins": 8, "deep_link": "zepto://product/amul-butter-100g"},
                    {"platform": "Instamart", "price": 56.00, "mrp": 57.00, "in_stock": True, "eta_mins": 14, "deep_link": "swiggy://instamart/item/amul-butter-100g"},
                    {"platform": "Blinkit", "price": 54.00, "mrp": 57.00, "in_stock": False, "eta_mins": None, "deep_link": None},
                    {"platform": "BigBasket", "price": 55.00, "mrp": 57.00, "in_stock": True, "eta_mins": 22, "deep_link": "bigbasket://product/amul-butter-100g"},
                ]
            },
            "500g": {
                "results": [
                    {"platform": "Zepto", "price": 270.00, "mrp": 285.00, "in_stock": True, "eta_mins": 8, "deep_link": "zepto://product/amul-butter-500g"},
                    {"platform": "Instamart", "price": 265.00, "mrp": 285.00, "in_stock": True, "eta_mins": 12, "deep_link": "swiggy://instamart/item/amul-butter-500g"},
                    {"platform": "Blinkit", "price": 275.00, "mrp": 285.00, "in_stock": True, "eta_mins": 10, "deep_link": "blinkit://product/amul-butter-500g"},
                    {"platform": "BigBasket", "price": 260.00, "mrp": 285.00, "in_stock": True, "eta_mins": 25, "deep_link": "bigbasket://product/amul-butter-500g"},
                ]
            },
        },
    },
    "tata salt": {
        "product_name": "Tata Salt - Iodised",
        "image_url": "https://cdn.grofers.com/assets/tata-salt.jpg",
        "variants": {
            "1kg": {
                "results": [
                    {"platform": "Zepto", "price": 28.00, "mrp": 28.00, "in_stock": True, "eta_mins": 9, "deep_link": "zepto://product/tata-salt-1kg"},
                    {"platform": "Instamart", "price": 28.00, "mrp": 28.00, "in_stock": True, "eta_mins": 15, "deep_link": "swiggy://instamart/item/tata-salt-1kg"},
                    {"platform": "Blinkit", "price": 27.00, "mrp": 28.00, "in_stock": True, "eta_mins": 8, "deep_link": "blinkit://product/tata-salt-1kg"},
                    {"platform": "BigBasket", "price": 28.00, "mrp": 28.00, "in_stock": True, "eta_mins": 20, "deep_link": "bigbasket://product/tata-salt-1kg"},
                ]
            },
        },
    },
    "maggi noodles": {
        "product_name": "Maggi 2-Minute Masala Noodles",
        "image_url": "https://cdn.grofers.com/assets/maggi-noodles.jpg",
        "variants": {
            "70g": {
                "results": [
                    {"platform": "Zepto", "price": 14.00, "mrp": 14.00, "in_stock": True, "eta_mins": 7, "deep_link": "zepto://product/maggi-70g"},
                    {"platform": "Instamart", "price": 14.00, "mrp": 14.00, "in_stock": True, "eta_mins": 11, "deep_link": "swiggy://instamart/item/maggi-70g"},
                    {"platform": "Blinkit", "price": 14.00, "mrp": 14.00, "in_stock": True, "eta_mins": 9, "deep_link": "blinkit://product/maggi-70g"},
                    {"platform": "BigBasket", "price": 14.00, "mrp": 14.00, "in_stock": True, "eta_mins": 18, "deep_link": "bigbasket://product/maggi-70g"},
                ]
            },
            "280g (4-pack)": {
                "results": [
                    {"platform": "Zepto", "price": 52.00, "mrp": 56.00, "in_stock": True, "eta_mins": 7, "deep_link": "zepto://product/maggi-280g"},
                    {"platform": "Instamart", "price": 55.00, "mrp": 56.00, "in_stock": True, "eta_mins": 13, "deep_link": "swiggy://instamart/item/maggi-280g"},
                    {"platform": "Blinkit", "price": 48.00, "mrp": 56.00, "in_stock": True, "eta_mins": 10, "deep_link": "blinkit://product/maggi-280g"},
                    {"platform": "BigBasket", "price": 50.00, "mrp": 56.00, "in_stock": False, "eta_mins": None, "deep_link": None},
                ]
            },
            "560g (8-pack)": {
                "results": [
                    {"platform": "Zepto", "price": 104.00, "mrp": 112.00, "in_stock": True, "eta_mins": 7, "deep_link": "zepto://product/maggi-560g"},
                    {"platform": "Instamart", "price": 108.00, "mrp": 112.00, "in_stock": False, "eta_mins": None, "deep_link": None},
                    {"platform": "Blinkit", "price": 96.00, "mrp": 112.00, "in_stock": True, "eta_mins": 10, "deep_link": "blinkit://product/maggi-560g"},
                    {"platform": "BigBasket", "price": 99.00, "mrp": 112.00, "in_stock": True, "eta_mins": 22, "deep_link": "bigbasket://product/maggi-560g"},
                ]
            },
        },
    },
    "milk": {
        "product_name": "Amul Taaza Toned Fresh Milk",
        "image_url": "https://cdn.grofers.com/assets/amul-milk.jpg",
        "variants": {
            "500ml": {
                "results": [
                    {"platform": "Zepto", "price": 29.00, "mrp": 30.00, "in_stock": True, "eta_mins": 6, "deep_link": "zepto://product/amul-milk-500ml"},
                    {"platform": "Instamart", "price": 30.00, "mrp": 30.00, "in_stock": True, "eta_mins": 10, "deep_link": "swiggy://instamart/item/amul-milk-500ml"},
                    {"platform": "Blinkit", "price": 29.00, "mrp": 30.00, "in_stock": True, "eta_mins": 8, "deep_link": "blinkit://product/amul-milk-500ml"},
                    {"platform": "BigBasket", "price": 30.00, "mrp": 30.00, "in_stock": True, "eta_mins": 19, "deep_link": "bigbasket://product/amul-milk-500ml"},
                ]
            },
            "1L": {
                "results": [
                    {"platform": "Zepto", "price": 56.00, "mrp": 58.00, "in_stock": True, "eta_mins": 6, "deep_link": "zepto://product/amul-milk-1l"},
                    {"platform": "Instamart", "price": 58.00, "mrp": 58.00, "in_stock": True, "eta_mins": 12, "deep_link": "swiggy://instamart/item/amul-milk-1l"},
                    {"platform": "Blinkit", "price": 55.00, "mrp": 58.00, "in_stock": True, "eta_mins": 9, "deep_link": "blinkit://product/amul-milk-1l"},
                    {"platform": "BigBasket", "price": 57.00, "mrp": 58.00, "in_stock": False, "eta_mins": None, "deep_link": None},
                ]
            },
        },
    },
    "atta": {
        "product_name": "Aashirvaad Superior MP Atta",
        "image_url": "https://cdn.grofers.com/assets/aashirvaad-atta.jpg",
        "variants": {
            "1kg": {
                "results": [
                    {"platform": "Zepto", "price": 68.00, "mrp": 72.00, "in_stock": True, "eta_mins": 10, "deep_link": "zepto://product/atta-1kg"},
                    {"platform": "Instamart", "price": 70.00, "mrp": 72.00, "in_stock": True, "eta_mins": 15, "deep_link": "swiggy://instamart/item/atta-1kg"},
                    {"platform": "Blinkit", "price": 65.00, "mrp": 72.00, "in_stock": True, "eta_mins": 11, "deep_link": "blinkit://product/atta-1kg"},
                    {"platform": "BigBasket", "price": 66.00, "mrp": 72.00, "in_stock": True, "eta_mins": 24, "deep_link": "bigbasket://product/atta-1kg"},
                ]
            },
            "5kg": {
                "results": [
                    {"platform": "Zepto", "price": 310.00, "mrp": 345.00, "in_stock": True, "eta_mins": 10, "deep_link": "zepto://product/atta-5kg"},
                    {"platform": "Instamart", "price": 325.00, "mrp": 345.00, "in_stock": True, "eta_mins": 16, "deep_link": "swiggy://instamart/item/atta-5kg"},
                    {"platform": "Blinkit", "price": 299.00, "mrp": 345.00, "in_stock": True, "eta_mins": 12, "deep_link": "blinkit://product/atta-5kg"},
                    {"platform": "BigBasket", "price": 305.00, "mrp": 345.00, "in_stock": True, "eta_mins": 28, "deep_link": "bigbasket://product/atta-5kg"},
                ]
            },
            "10kg": {
                "results": [
                    {"platform": "Zepto", "price": 580.00, "mrp": 650.00, "in_stock": False, "eta_mins": None, "deep_link": None},
                    {"platform": "Instamart", "price": 620.00, "mrp": 650.00, "in_stock": True, "eta_mins": 18, "deep_link": "swiggy://instamart/item/atta-10kg"},
                    {"platform": "Blinkit", "price": 565.00, "mrp": 650.00, "in_stock": True, "eta_mins": 14, "deep_link": "blinkit://product/atta-10kg"},
                    {"platform": "BigBasket", "price": 575.00, "mrp": 650.00, "in_stock": True, "eta_mins": 30, "deep_link": "bigbasket://product/atta-10kg"},
                ]
            },
        },
    },
    "coca cola": {
        "product_name": "Coca-Cola Original Taste",
        "image_url": "https://cdn.grofers.com/assets/coca-cola.jpg",
        "variants": {
            "300ml": {
                "results": [
                    {"platform": "Zepto", "price": 35.00, "mrp": 40.00, "in_stock": True, "eta_mins": 7, "deep_link": "zepto://product/coke-300ml"},
                    {"platform": "Instamart", "price": 38.00, "mrp": 40.00, "in_stock": True, "eta_mins": 9, "deep_link": "swiggy://instamart/item/coke-300ml"},
                    {"platform": "Blinkit", "price": 35.00, "mrp": 40.00, "in_stock": True, "eta_mins": 8, "deep_link": "blinkit://product/coke-300ml"},
                    {"platform": "BigBasket", "price": 40.00, "mrp": 40.00, "in_stock": True, "eta_mins": 20, "deep_link": "bigbasket://product/coke-300ml"},
                ]
            },
            "750ml": {
                "results": [
                    {"platform": "Zepto", "price": 38.00, "mrp": 42.00, "in_stock": True, "eta_mins": 7, "deep_link": "zepto://product/coke-750ml"},
                    {"platform": "Instamart", "price": 40.00, "mrp": 42.00, "in_stock": True, "eta_mins": 11, "deep_link": "swiggy://instamart/item/coke-750ml"},
                    {"platform": "Blinkit", "price": 38.00, "mrp": 42.00, "in_stock": True, "eta_mins": 9, "deep_link": "blinkit://product/coke-750ml"},
                    {"platform": "BigBasket", "price": 42.00, "mrp": 42.00, "in_stock": False, "eta_mins": None, "deep_link": None},
                ]
            },
            "2L": {
                "results": [
                    {"platform": "Zepto", "price": 86.00, "mrp": 95.00, "in_stock": True, "eta_mins": 8, "deep_link": "zepto://product/coke-2l"},
                    {"platform": "Instamart", "price": 90.00, "mrp": 95.00, "in_stock": True, "eta_mins": 14, "deep_link": "swiggy://instamart/item/coke-2l"},
                    {"platform": "Blinkit", "price": 85.00, "mrp": 95.00, "in_stock": True, "eta_mins": 10, "deep_link": "blinkit://product/coke-2l"},
                    {"platform": "BigBasket", "price": 88.00, "mrp": 95.00, "in_stock": True, "eta_mins": 23, "deep_link": "bigbasket://product/coke-2l"},
                ]
            },
        },
    },
    "rice": {
        "product_name": "India Gate Basmati Rice - Super",
        "image_url": "https://cdn.grofers.com/assets/india-gate-rice.jpg",
        "variants": {
            "1kg": {
                "results": [
                    {"platform": "Zepto", "price": 175.00, "mrp": 195.00, "in_stock": True, "eta_mins": 9, "deep_link": "zepto://product/rice-1kg"},
                    {"platform": "Instamart", "price": 180.00, "mrp": 195.00, "in_stock": True, "eta_mins": 14, "deep_link": "swiggy://instamart/item/rice-1kg"},
                    {"platform": "Blinkit", "price": 170.00, "mrp": 195.00, "in_stock": True, "eta_mins": 10, "deep_link": "blinkit://product/rice-1kg"},
                    {"platform": "BigBasket", "price": 168.00, "mrp": 195.00, "in_stock": True, "eta_mins": 25, "deep_link": "bigbasket://product/rice-1kg"},
                ]
            },
            "5kg": {
                "results": [
                    {"platform": "Zepto", "price": 799.00, "mrp": 900.00, "in_stock": True, "eta_mins": 10, "deep_link": "zepto://product/rice-5kg"},
                    {"platform": "Instamart", "price": 825.00, "mrp": 900.00, "in_stock": True, "eta_mins": 16, "deep_link": "swiggy://instamart/item/rice-5kg"},
                    {"platform": "Blinkit", "price": 780.00, "mrp": 900.00, "in_stock": False, "eta_mins": None, "deep_link": None},
                    {"platform": "BigBasket", "price": 775.00, "mrp": 900.00, "in_stock": True, "eta_mins": 30, "deep_link": "bigbasket://product/rice-5kg"},
                ]
            },
        },
    },
    "sugar": {
        "product_name": "Uttam Sugar - Sulphurless",
        "image_url": "https://cdn.grofers.com/assets/uttam-sugar.jpg",
        "variants": {
            "1kg": {
                "results": [
                    {"platform": "Zepto", "price": 46.00, "mrp": 50.00, "in_stock": True, "eta_mins": 8, "deep_link": "zepto://product/sugar-1kg"},
                    {"platform": "Instamart", "price": 48.00, "mrp": 50.00, "in_stock": True, "eta_mins": 13, "deep_link": "swiggy://instamart/item/sugar-1kg"},
                    {"platform": "Blinkit", "price": 45.00, "mrp": 50.00, "in_stock": True, "eta_mins": 9, "deep_link": "blinkit://product/sugar-1kg"},
                    {"platform": "BigBasket", "price": 47.00, "mrp": 50.00, "in_stock": True, "eta_mins": 21, "deep_link": "bigbasket://product/sugar-1kg"},
                ]
            },
            "5kg": {
                "results": [
                    {"platform": "Zepto", "price": 225.00, "mrp": 245.00, "in_stock": True, "eta_mins": 9, "deep_link": "zepto://product/sugar-5kg"},
                    {"platform": "Instamart", "price": 235.00, "mrp": 245.00, "in_stock": True, "eta_mins": 15, "deep_link": "swiggy://instamart/item/sugar-5kg"},
                    {"platform": "Blinkit", "price": 220.00, "mrp": 245.00, "in_stock": True, "eta_mins": 11, "deep_link": "blinkit://product/sugar-5kg"},
                    {"platform": "BigBasket", "price": 228.00, "mrp": 245.00, "in_stock": False, "eta_mins": None, "deep_link": None},
                ]
            },
        },
    },
}


# Quick lookup: maps search terms to product keys for fuzzy matching
SEARCH_ALIASES = {
    "butter": "amul butter",
    "amul": "amul butter",
    "salt": "tata salt",
    "tata": "tata salt",
    "maggi": "maggi noodles",
    "noodles": "maggi noodles",
    "noodle": "maggi noodles",
    "milk": "milk",
    "amul milk": "milk",
    "atta": "atta",
    "flour": "atta",
    "wheat": "atta",
    "aashirvaad": "atta",
    "coke": "coca cola",
    "coca cola": "coca cola",
    "cola": "coca cola",
    "pepsi": "coca cola",
    "cold drink": "coca cola",
    "rice": "rice",
    "basmati": "rice",
    "sugar": "sugar",
}
