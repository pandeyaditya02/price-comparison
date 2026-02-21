/**
 * QuickCompare — Search Store (Zustand)
 */
import { create } from 'zustand';
import { MultiSearchResponse, ProductSearchResult } from '../types';
import { searchProducts as fetchSearch, getVariant } from '../api/search';

interface SearchState {
    query: string;
    results: ProductSearchResult[];
    isLoading: boolean;
    error: string | null;
    hasSearched: boolean;

    setQuery: (query: string) => void;
    searchProducts: (query: string, pincode?: string) => Promise<void>;
    switchVariant: (productIndex: number, variant: string, pincode?: string) => Promise<void>;
    clearResults: () => void;
}

export const useSearchStore = create<SearchState>((set, get) => ({
    query: '',
    results: [],
    isLoading: false,
    error: null,
    hasSearched: false,

    setQuery: (query: string) => set({ query }),

    searchProducts: async (query: string, pincode?: string) => {
        set({ isLoading: true, error: null, query, hasSearched: true });
        try {
            const response = await fetchSearch(query, pincode);
            set({ results: response.products, isLoading: false });
        } catch (err: any) {
            set({ error: err.message || 'Search failed', isLoading: false });
        }
    },

    switchVariant: async (productIndex: number, variant: string, pincode?: string) => {
        const { results } = get();
        if (productIndex < 0 || productIndex >= results.length) return;

        const product = results[productIndex];
        try {
            const variantData = await getVariant(
                product.product_name.toLowerCase(),
                variant,
                pincode
            );
            const updated = [...results];
            updated[productIndex] = variantData;
            set({ results: updated });
        } catch (err: any) {
            console.warn('Variant switch failed:', err.message);
        }
    },

    clearResults: () => set({ results: [], query: '', hasSearched: false, error: null }),
}));
