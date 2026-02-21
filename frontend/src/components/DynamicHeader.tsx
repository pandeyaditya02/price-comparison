/**
 * QuickCompare — Dynamic Header Component
 * Two states: idle (large greeting + zone) → scrolling (sticky glassmorphic bar)
 */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, {
    useAnimatedStyle,
    interpolate,
    Extrapolation,
    type SharedValue,
} from 'react-native-reanimated';
import { COLORS, RADIUS, SHADOWS, SPACING, TYPOGRAPHY } from '../theme';
import { useLocationStore } from '../store/locationStore';

interface DynamicHeaderProps {
    scrollOffset: SharedValue<number>;
}

export default function DynamicHeader({ scrollOffset }: DynamicHeaderProps) {
    const { displayAddress } = useLocationStore();

    // Animate header height and opacity based on scroll
    const headerAnimatedStyle = useAnimatedStyle(() => {
        const height = interpolate(
            scrollOffset.value,
            [0, 120],
            [140, 0],
            Extrapolation.CLAMP
        );
        const opacity = interpolate(
            scrollOffset.value,
            [0, 80],
            [1, 0],
            Extrapolation.CLAMP
        );
        return { height, opacity };
    });

    // Sticky glassmorphic bar appears on scroll
    const stickyBarStyle = useAnimatedStyle(() => {
        const opacity = interpolate(
            scrollOffset.value,
            [60, 120],
            [0, 1],
            Extrapolation.CLAMP
        );
        const translateY = interpolate(
            scrollOffset.value,
            [60, 120],
            [-20, 0],
            Extrapolation.CLAMP
        );
        return { opacity, transform: [{ translateY }] };
    });

    return (
        <View>
            {/* Idle State — Large greeting */}
            <Animated.View style={[styles.idleHeader, headerAnimatedStyle]}>
                <Text style={styles.greeting}>Good evening 👋</Text>
                <View style={styles.locationRow}>
                    <Text style={styles.locationLabel}>Delivering to</Text>
                    <View style={styles.locationPill}>
                        <Text style={styles.locationIcon}>📍</Text>
                        <Text style={styles.locationText}>{displayAddress}</Text>
                        <Text style={styles.chevron}>›</Text>
                    </View>
                </View>
            </Animated.View>

            {/* Sticky State — Glassmorphic compact bar */}
            <Animated.View style={[styles.stickyBar, stickyBarStyle]}>
                <Text style={styles.stickyLocationIcon}>📍</Text>
                <Text style={styles.stickyLocationText} numberOfLines={1}>
                    {displayAddress}
                </Text>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    idleHeader: {
        paddingHorizontal: SPACING.xl,
        paddingTop: SPACING.lg,
        paddingBottom: SPACING.md,
        gap: SPACING.md,
        overflow: 'hidden',
    },
    greeting: {
        ...TYPOGRAPHY.heroTitle,
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.sm,
    },
    locationLabel: {
        ...TYPOGRAPHY.bodySmall,
        color: COLORS.textTertiary,
    },
    locationPill: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.backgroundAlt,
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.xs + 2,
        borderRadius: RADIUS.pill,
        gap: SPACING.xs,
    },
    locationIcon: {
        fontSize: 12,
    },
    locationText: {
        ...TYPOGRAPHY.body,
        fontWeight: '600',
        color: COLORS.textPrimary,
    },
    chevron: {
        fontSize: 16,
        color: COLORS.textTertiary,
        fontWeight: '600',
    },
    stickyBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.glassBackground,
        marginHorizontal: SPACING.xl,
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm,
        borderRadius: RADIUS.lg,
        gap: SPACING.xs,
        ...SHADOWS.glass,
    },
    stickyLocationIcon: {
        fontSize: 12,
    },
    stickyLocationText: {
        ...TYPOGRAPHY.bodySmall,
        fontWeight: '600',
        color: COLORS.textPrimary,
        flex: 1,
    },
});
