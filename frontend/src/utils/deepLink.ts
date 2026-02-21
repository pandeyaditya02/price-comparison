/**
 * QuickCompare — Deep Link Utility
 */
import { Linking, Alert, Platform } from 'react-native';

const STORE_FALLBACKS: Record<string, { ios: string; android: string }> = {
    Zepto: {
        ios: 'https://apps.apple.com/in/app/zepto/id1575323726',
        android: 'https://play.google.com/store/apps/details?id=com.kivihealth.zepto',
    },
    Instamart: {
        ios: 'https://apps.apple.com/in/app/swiggy-food-grocery-dineout/id989540920',
        android: 'https://play.google.com/store/apps/details?id=in.swiggy.android',
    },
    Blinkit: {
        ios: 'https://apps.apple.com/in/app/blinkit-grocery-in-minutes/id1456957073',
        android: 'https://play.google.com/store/apps/details?id=com.grofers.customerapp',
    },
    BigBasket: {
        ios: 'https://apps.apple.com/in/app/bigbasket-grocery-delivery/id660683080',
        android: 'https://play.google.com/store/apps/details?id=com.bigbasket.mobileapp',
    },
};

export async function openDeepLink(
    deepLink: string | null,
    platform: string
): Promise<void> {
    if (!deepLink) {
        Alert.alert('Unavailable', `This product is currently out of stock on ${platform}.`);
        return;
    }

    try {
        const canOpen = await Linking.canOpenURL(deepLink);
        if (canOpen) {
            await Linking.openURL(deepLink);
        } else {
            // Fallback to app store
            const fallback = STORE_FALLBACKS[platform];
            if (fallback) {
                const storeUrl = Platform.OS === 'ios' ? fallback.ios : fallback.android;
                await Linking.openURL(storeUrl);
            } else {
                Alert.alert('App Not Found', `${platform} app is not installed on your device.`);
            }
        }
    } catch (error) {
        console.error('Deep link error:', error);
        Alert.alert('Error', `Could not open ${platform}.`);
    }
}
