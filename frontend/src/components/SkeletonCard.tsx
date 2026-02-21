/**
 * QuickCompare — Skeleton Card Component
 * Matches BentoCard layout with shimmering silver gradient.
 */
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withTiming,
    interpolate,
    Easing,
} from 'react-native-reanimated';
import { COLORS, RADIUS, SHADOWS, SPACING } from '../theme';

function ShimmerBlock({ width, height, borderRadius = RADIUS.sm }: {
    width: number | string;
    height: number;
    borderRadius?: number;
}) {
    const shimmer = useSharedValue(0);

    useEffect(() => {
        shimmer.value = withRepeat(
            withTiming(1, { duration: 1500, easing: Easing.inOut(Easing.ease) }),
            -1,
            true
        );
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: interpolate(shimmer.value, [0, 1], [0.4, 0.8]),
    }));

    return (
        <Animated.View
            style={[
                {
                    width: width as any,
                    height,
                    borderRadius,
                    backgroundColor: COLORS.skeletonBase,
                },
                animatedStyle,
            ]}
        />
    );
}

export default function SkeletonCard() {
    return (
        <View style={styles.card}>
            {/* Hero image placeholder */}
            <View style={styles.heroSection}>
                <ShimmerBlock width="100%" height={120} borderRadius={RADIUS.lg} />
            </View>

            {/* Product name */}
            <ShimmerBlock width="70%" height={18} />
            <ShimmerBlock width="40%" height={14} />

            {/* Platform pills grid */}
            <View style={styles.pillGrid}>
                <ShimmerBlock width="48%" height={100} borderRadius={RADIUS.lg} />
                <ShimmerBlock width="48%" height={100} borderRadius={RADIUS.lg} />
                <ShimmerBlock width="48%" height={100} borderRadius={RADIUS.lg} />
                <ShimmerBlock width="48%" height={100} borderRadius={RADIUS.lg} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.surface,
        borderRadius: RADIUS.xl,
        padding: SPACING.lg,
        gap: SPACING.md,
        ...SHADOWS.card,
    },
    heroSection: {
        width: '100%',
    },
    pillGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: SPACING.sm,
        marginTop: SPACING.sm,
    },
});
