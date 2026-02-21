/**
 * QuickCompare — TypeScript Interfaces
 */

export interface PlatformResult {
    platform: string;
    price: number;
    mrp: number;
    in_stock: boolean;
    eta_mins: number | null;
    deep_link: string | null;
}

export interface ProductSearchResult {
    status: string;
    product_name: string;
    variant: string;
    available_variants: string[];
    image_url: string;
    results: PlatformResult[];
}

export interface MultiSearchResponse {
    status: string;
    query: string;
    products: ProductSearchResult[];
}

export interface TrendingProduct {
    id: string;
    name: string;
    image_url: string;
    category: string;
    lowest_price: number;
    platforms_count: number;
}
