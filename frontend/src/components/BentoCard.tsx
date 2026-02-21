/**
 * QuickCompare — Bento Comparison Card Component
 * Product image + 2×2 platform pill grid with entrance animations.
 */
import React, { useEffect, useMemo } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    withDelay,
    FadeInDown,
} from 'react-native-reanimated';
import { COLORS, RADIUS, SHADOWS, SPACING, TYPOGRAPHY } from '../theme';
import { ProductSearchResult, PlatformResult } from '../types';
import PlatformPill from './PlatformPill';
import VariantSwitcher from './VariantSwitcher';

interface BentoCardProps {
    product: ProductSearchResult;
    index: number;
    onVariantSelect?: (variant: string) => void;
}

export default function BentoCard({ product, index, onVariantSelect }: BentoCardProps) {
    // Sort: in-stock first, then out-of-stock
    const sortedResults = useMemo(() => {
        return [...product.results].sort((a, b) => {
            if (a.in_stock && !b.in_stock) return -1;
            if (!a.in_stock && b.in_stock) return 1;
            return a.price - b.price;
        });
    }, [product.results]);

    // Find the lowest price among in-stock platforms
    const lowestPrice = useMemo(() => {
        const inStock = product.results.filter((r) => r.in_stock);
        if (inStock.length === 0) return null;
        return Math.min(...inStock.map((r) => r.price));
    }, [product.results]);

    // Calculate savings
    const savings = useMemo(() => {
        const inStock = product.results.filter((r) => r.in_stock);
        if (inStock.length < 2) return null;
        const prices = inStock.map((r) => r.price);
        const max = Math.max(...prices);
        const min = Math.min(...prices);
        return max - min;
    }, [product.results]);

    return (
        <Animated.View
            entering={FadeInDown.delay(index * 100).springify().damping(18)}
            style={styles.card}
        >
            {/* Hero Section — Product Image */}
            <View style={styles.heroSection}>
                <View style={styles.imageContainer}>
                    <View style={styles.imagePlaceholder}>
                        <Text style={styles.imageEmoji}>📦</Text>
                    </View>
                </View>

                <View style={styles.productInfo}>
                    <Text style={styles.productName} numberOfLines={2}>
                        {product.product_name}
                    </Text>
                    <Text style={styles.variant}>{product.variant}</Text>
                    {savings !== null && savings > 0 && (
                        <View style={styles.savingsBadge}>
                            <Text style={styles.savingsText}>Save up to ₹{savings}</Text>
                        </View>
                    )}
                </View>
            </View>

            {/* Variant Switcher */}
            {product.available_variants.length > 1 && (
                <VariantSwitcher
                    variants={product.available_variants}
                    selectedVariant={product.variant}
                    onSelect={(v) => onVariantSelect?.(v)}
                />
            )}

            {/* Platform Pills — 2x2 Grid */}
            <View style={styles.pillGrid}>
                {sortedResults.map((result) => (
                    <PlatformPill
                        key={result.platform}
                        data={result}
                        isBestPrice={result.in_stock && result.price === lowestPrice}
                    />
                ))}
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.surface,
        borderRadius: RADIUS.xxl,
        padding: SPACING.lg,
        ...SHADOWS.card,
        gap: SPACING.lg,
    },
    heroSection: {
        flexDirection: 'row',
        gap: SPACING.lg,
        alignItems: 'center',
    },
    imageContainer: {
        width: 90,
        height: 90,
        borderRadius: RADIUS.lg,
        backgroundColor: COLORS.backgroundAlt,
        overflow: 'hidden',
    },
    imagePlaceholder: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageEmoji: {
        fontSize: 40,
    },
    productInfo: {
        flex: 1,
        gap: SPACING.xs,
    },
    productName: {
        ...TYPOGRAPHY.cardTitle,
    },
    variant: {
        ...TYPOGRAPHY.bodySmall,
        color: COLORS.textTertiary,
    },
    savingsBadge: {
        alignSelf: 'flex-start',
        backgroundColor: COLORS.bestPrice + '15',
        paddingHorizontal: SPACING.sm,
        paddingVertical: 3,
        borderRadius: RADIUS.pill,
        marginTop: 2,
    },
    savingsText: {
        fontSize: 11,
        fontWeight: '700',
        color: COLORS.bestPrice,
    },
    pillGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: SPACING.sm,
    },
});
