/**
 * QuickCompare — ETA Badge Component
 * Pill-shaped badge showing delivery time in medium weight
 */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from '../theme';

interface ETABadgeProps {
    etaMins: number | null;
    color: string;
}

export default function ETABadge({ etaMins, color }: ETABadgeProps) {
    if (etaMins === null) {
        return (
            <View style={[styles.badge, { backgroundColor: COLORS.outOfStock + '20' }]}>
                <Text style={[styles.text, { color: COLORS.textTertiary }]}>N/A</Text>
            </View>
        );
    }

    return (
        <View style={[styles.badge, { backgroundColor: color + '15' }]}>
            <Text style={[styles.text, { color }]}>{etaMins} min</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    badge: {
        paddingHorizontal: SPACING.sm,
        paddingVertical: 3,
        borderRadius: RADIUS.pill,
        alignSelf: 'flex-start',
    },
    text: {
        ...TYPOGRAPHY.eta,
    },
});
