/**
 * QuickCompare — Variant Switcher Component
 * Toggle between product variants (100g, 500g, 1kg) with selection animation.
 */
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Animated, {
    useAnimatedStyle,
    withSpring,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from '../theme';
import { selectionTap } from '../utils/haptics';

interface VariantSwitcherProps {
    variants: string[];
    selectedVariant: string;
    onSelect: (variant: string) => void;
}

export default function VariantSwitcher({
    variants,
    selectedVariant,
    onSelect,
}: VariantSwitcherProps) {
    if (variants.length <= 1) return null;

    return (
        <View style={styles.container}>
            <Text style={styles.label}>SIZE</Text>
            <View style={styles.pillRow}>
                {variants.map((variant) => {
                    const isSelected = variant === selectedVariant;
                    return (
                        <Pressable
                            key={variant}
                            onPress={() => {
                                selectionTap();
                                onSelect(variant);
                            }}
                            style={[
                                styles.pill,
                                isSelected && styles.pillSelected,
                            ]}
                        >
                            <Text
                                style={[
                                    styles.pillText,
                                    isSelected && styles.pillTextSelected,
                                ]}
                            >
                                {variant}
                            </Text>
                        </Pressable>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: SPACING.sm,
    },
    label: {
        ...TYPOGRAPHY.label,
    },
    pillRow: {
        flexDirection: 'row',
        gap: SPACING.sm,
        flexWrap: 'wrap',
    },
    pill: {
        paddingHorizontal: SPACING.lg,
        paddingVertical: SPACING.sm,
        borderRadius: RADIUS.pill,
        backgroundColor: COLORS.backgroundAlt,
        borderWidth: 1.5,
        borderColor: 'transparent',
    },
    pillSelected: {
        backgroundColor: COLORS.searchAccentBg,
        borderColor: COLORS.searchAccent,
    },
    pillText: {
        ...TYPOGRAPHY.bodySmall,
        fontWeight: '600',
        color: COLORS.textSecondary,
    },
    pillTextSelected: {
        color: COLORS.searchAccent,
    },
});
