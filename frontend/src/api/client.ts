/**
 * QuickCompare — API Client
 */
import { Platform } from 'react-native';

// Use 10.0.2.2 for Android emulator, localhost for iOS simulator
const getBaseUrl = () => {
    if (__DEV__) {
        if (Platform.OS === 'android') {
            return 'http://10.0.2.2:8000';
        }
        return 'http://localhost:8000';
    }
    return 'https://api.quickcompare.app'; // production URL
};

export const BASE_URL = getBaseUrl();

export async function fetchApi<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
    const url = new URL(`${BASE_URL}${endpoint}`);
    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            url.searchParams.append(key, value);
        });
    }

    const response = await fetch(url.toString(), {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
}
