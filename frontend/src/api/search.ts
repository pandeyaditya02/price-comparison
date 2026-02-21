/**
 * QuickCompare — Search API
 */
import { fetchApi } from './client';
import { MultiSearchResponse, ProductSearchResult } from '../types';

export async function searchProducts(
    query: string,
    pincode: string = '122001'
): Promise<MultiSearchResponse> {
    return fetchApi<MultiSearchResponse>('/api/v1/search', { query, pincode });
}

export async function getVariant(
    productKey: string,
    variant: string,
    pincode: string = '122001'
): Promise<ProductSearchResult> {
    return fetchApi<ProductSearchResult>(
        `/api/v1/product/${encodeURIComponent(productKey)}/variant/${encodeURIComponent(variant)}`,
        { pincode }
    );
}
