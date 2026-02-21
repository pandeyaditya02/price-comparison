/**
 * QuickCompare — Home Screen
 * Dynamic header + search bar + trending products
 */
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    FlatList,
} from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedScrollHandler,
    FadeInDown,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, RADIUS, SHADOWS, SPACING, TYPOGRAPHY, PLATFORMS } from '../theme';
import DynamicHeader from '../components/DynamicHeader';
import SearchBar from '../components/SearchBar';
import BentoCard from '../components/BentoCard';
import SkeletonCard from '../components/SkeletonCard';
import { useSearchStore } from '../store/searchStore';
import { TRENDING_PRODUCTS } from '../data/trendingProducts';
import { TrendingProduct } from '../types';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export default function HomeScreen() {
    const scrollOffset = useSharedValue(0);
    const { results, isLoading, error, hasSearched, searchProducts, switchVariant } =
        useSearchStore();

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollOffset.value = event.contentOffset.y;
        },
    });

    const handleTrendingPress = (product: TrendingProduct) => {
        searchProducts(product.id);
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <AnimatedFlatList
                onScroll={scrollHandler}
                scrollEventThrottle={16}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View style={styles.headerArea}>
                        {/* Dynamic Header */}
                        <DynamicHeader scrollOffset={scrollOffset} />

                        {/* Search Bar */}
                        <View style={styles.searchSection}>
                            <SearchBar />
                        </View>

                        {/* Loading State */}
                        {isLoading && (
                            <View style={styles.resultsArea}>
                                <SkeletonCard />
                                <SkeletonCard />
                            </View>
                        )}

                        {/* Error State */}
                        {error && (
                            <Animated.View
                                entering={FadeInDown.springify()}
                                style={styles.emptyState}
                            >
                                <Text style={styles.emptyEmoji}>😕</Text>
                                <Text style={styles.emptyTitle}>Something went wrong</Text>
                                <Text style={styles.emptySubtitle}>{error}</Text>
                            </Animated.View>
                        )}

                        {/* Empty Results */}
                        {hasSearched && !isLoading && !error && results.length === 0 && (
                            <Animated.View
                                entering={FadeInDown.springify()}
                                style={styles.emptyState}
                            >
                                <Text style={styles.emptyEmoji}>🔍</Text>
                                <Text style={styles.emptyTitle}>No products found</Text>
                                <Text style={styles.emptySubtitle}>
                                    Try searching for butter, milk, maggi, atta...
                                </Text>
                            </Animated.View>
                        )}

                        {/* Search Results */}
                        {results.length > 0 && !isLoading && (
                            <View style={styles.resultsArea}>
                                <Text style={styles.resultsTitle}>
                                    {results.length} product{results.length > 1 ? 's' : ''} found
                                </Text>
                                {results.map((product, index) => (
                                    <BentoCard
                                        key={`${product.product_name}-${product.variant}`}
                                        product={product}
                                        index={index}
                                        onVariantSelect={(v) => switchVariant(index, v)}
                                    />
                                ))}
                            </View>
                        )}

                        {/* Trending Section — shown when no search */}
                        {!hasSearched && (
                            <View style={styles.trendingSection}>
                                <Text style={styles.sectionTitle}>🔥 Trending Now</Text>
                                <Text style={styles.sectionSubtitle}>
                                    Tap to compare prices across platforms
                                </Text>
                            </View>
                        )}
                    </View>
                }
                data={!hasSearched ? TRENDING_PRODUCTS : []}
                renderItem={({ item, index }: { item: any; index: number }) => (
                    <Animated.View
                        entering={FadeInDown.delay(index * 80).springify().damping(18)}
                    >
                        <Pressable
                            onPress={() => handleTrendingPress(item)}
                            style={styles.trendingCard}
                        >
                            <View style={styles.trendingImageWrap}>
                                <Text style={styles.trendingEmoji}>📦</Text>
                            </View>
                            <View style={styles.trendingInfo}>
                                <Text style={styles.trendingName}>{item.name}</Text>
                                <Text style={styles.trendingCategory}>{item.category}</Text>
                                <View style={styles.trendingMeta}>
                                    <Text style={styles.trendingPrice}>
                                        from ₹{item.lowest_price}
                                    </Text>
                                    <View style={styles.trendingPlatforms}>
                                        {Object.values(PLATFORMS)
                                            .slice(0, item.platforms_count)
                                            .map((p: any) => (
                                                <View
                                                    key={p.label}
                                                    style={[styles.miniDot, { backgroundColor: p.color }]}
                                                />
                                            ))}
                                    </View>
                                </View>
                            </View>
                            <Text style={styles.trendingArrow}>→</Text>
                        </Pressable>
                    </Animated.View>
                )}
                keyExtractor={(item: any) => item.id}
                ItemSeparatorComponent={() => <View style={{ height: SPACING.md }} />}
                ListFooterComponent={<View style={{ height: 40 }} />}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundAlt,
    },
    scrollContent: {
        paddingBottom: SPACING.xxxl,
    },
    headerArea: {
        gap: SPACING.lg,
    },
    searchSection: {
        paddingHorizontal: SPACING.xl,
    },
    resultsArea: {
        paddingHorizontal: SPACING.xl,
        gap: SPACING.lg,
    },
    resultsTitle: {
        ...TYPOGRAPHY.label,
        paddingTop: SPACING.sm,
    },

    // Trending Section
    trendingSection: {
        paddingHorizontal: SPACING.xl,
        gap: SPACING.xs,
    },
    sectionTitle: {
        ...TYPOGRAPHY.sectionTitle,
    },
    sectionSubtitle: {
        ...TYPOGRAPHY.bodySmall,
        color: COLORS.textTertiary,
        marginBottom: SPACING.sm,
    },
    trendingCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.surface,
        marginHorizontal: SPACING.xl,
        padding: SPACING.md,
        borderRadius: RADIUS.xl,
        gap: SPACING.md,
        ...SHADOWS.card,
    },
    trendingImageWrap: {
        width: 56,
        height: 56,
        borderRadius: RADIUS.lg,
        backgroundColor: COLORS.backgroundAlt,
        alignItems: 'center',
        justifyContent: 'center',
    },
    trendingEmoji: {
        fontSize: 28,
    },
    trendingInfo: {
        flex: 1,
        gap: 2,
    },
    trendingName: {
        ...TYPOGRAPHY.cardTitle,
    },
    trendingCategory: {
        ...TYPOGRAPHY.bodySmall,
        color: COLORS.textTertiary,
    },
    trendingMeta: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.sm,
        marginTop: 2,
    },
    trendingPrice: {
        fontSize: 13,
        fontWeight: '700',
        color: COLORS.bestPrice,
    },
    trendingPlatforms: {
        flexDirection: 'row',
        gap: 4,
    },
    miniDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
    },
    trendingArrow: {
        fontSize: 18,
        color: COLORS.textTertiary,
        fontWeight: '600',
    },

    // Empty/Error states
    emptyState: {
        alignItems: 'center',
        paddingVertical: SPACING.xxxl * 2,
        gap: SPACING.sm,
    },
    emptyEmoji: {
        fontSize: 48,
    },
    emptyTitle: {
        ...TYPOGRAPHY.cardTitle,
        fontSize: 18,
    },
    emptySubtitle: {
        ...TYPOGRAPHY.bodySmall,
        color: COLORS.textTertiary,
        textAlign: 'center',
        paddingHorizontal: SPACING.xxxl,
    },
});
