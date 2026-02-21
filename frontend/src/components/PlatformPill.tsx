/**
 * QuickCompare — Platform Pill Component
 * Shows platform icon, price, ETA. Glowing border for best price.
 * Spring press animation + haptic feedback. Triggers deep link on tap.
 */
import React, { useCallback } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
} from 'react-native-reanimated';
import { COLORS, RADIUS, SPACING, TYPOGRAPHY, PLATFORMS, SHADOWS } from '../theme';
import ETABadge from './ETABadge';
import { openDeepLink } from '../utils/deepLink';
import { lightTap } from '../utils/haptics';
import { PlatformResult } from '../types';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface PlatformPillProps {
    data: PlatformResult;
    isBestPrice: boolean;
}

export default function PlatformPill({ data, isBestPrice }: PlatformPillProps) {
    const scale = useSharedValue(1);
    const platformConfig = PLATFORMS[data.platform] || {
        color: COLORS.textSecondary,
        bg: COLORS.backgroundAlt,
        label: data.platform,
    };

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));

    const handlePressIn = useCallback(() => {
        scale.value = withSpring(0.95, { damping: 15, stiffness: 300 });
        lightTap();
    }, []);

    const handlePressOut = useCallback(() => {
        scale.value = withSpring(1, { damping: 10, stiffness: 200 });
    }, []);

    const handlePress = useCallback(() => {
        openDeepLink(data.deep_link, data.platform);
    }, [data]);

    const isOutOfStock = !data.in_stock;

    return (
        <AnimatedPressable
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={handlePress}
            style={[
                animatedStyle,
                styles.pill,
                {
                    backgroundColor: isOutOfStock ? COLORS.backgroundAlt : platformConfig.bg,
                    borderColor: isBestPrice ? COLORS.bestPrice : 'transparent',
                    opacity: isOutOfStock ? 0.5 : 1,
                },
                isBestPrice && styles.glowing,
            ]}
        >
            {/* Platform Icon Circle */}
            <View
                style={[
                    styles.iconCircle,
                    { backgroundColor: isOutOfStock ? COLORS.outOfStock : platformConfig.color },
                ]}
            >
                <Text style={styles.iconText}>
                    {platformConfig.label.charAt(0)}
                </Text>
            </View>

            {/* Platform Name */}
            <Text
                style={[
                    styles.platformName,
                    isOutOfStock && { color: COLORS.textTertiary },
                ]}
            >
                {platformConfig.label}
            </Text>

            {/* Price */}
            <View style={styles.priceRow}>
                <Text
                    style={[
                        styles.price,
                        isOutOfStock && { color: COLORS.textTertiary },
                        isBestPrice && { color: COLORS.bestPrice },
                    ]}
                >
                    ₹{data.price}
                </Text>
                {data.mrp > data.price && !isOutOfStock && (
                    <Text style={styles.mrp}>₹{data.mrp}</Text>
                )}
            </View>

            {/* ETA Badge */}
            <ETABadge etaMins={data.eta_mins} color={platformConfig.color} />

            {/* Out of Stock Label */}
            {isOutOfStock && (
                <View style={styles.oosContainer}>
                    <Text style={styles.oosText}>Out of Stock</Text>
                </View>
            )}
        </AnimatedPressable>
    );
}

const styles = StyleSheet.create({
    pill: {
        flex: 1,
        padding: SPACING.md,
        borderRadius: RADIUS.lg,
        borderWidth: 2,
        alignItems: 'center',
        gap: SPACING.xs,
        minWidth: '45%',
    },
    glowing: {
        ...SHADOWS.cardHover,
        shadowColor: COLORS.bestPrice,
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 6,
    },
    iconCircle: {
        width: 32,
        height: 32,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 2,
    },
    iconText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '700',
    },
    platformName: {
        ...TYPOGRAPHY.bodySmall,
        fontWeight: '600',
        color: COLORS.textSecondary,
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.xs,
    },
    price: {
        ...TYPOGRAPHY.priceSmall,
    },
    mrp: {
        ...TYPOGRAPHY.priceMrp,
    },
    oosContainer: {
        marginTop: 2,
    },
    oosText: {
        fontSize: 10,
        fontWeight: '500',
        color: COLORS.textTertiary,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
});
