/**
 * QuickCompare — Search Bar Component
 * Text input with search icon and clear button, wired to Zustand store.
 */
import React, { useRef, useState } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Pressable,
    Text,
    Keyboard,
} from 'react-native';
import { COLORS, RADIUS, SHADOWS, SPACING, TYPOGRAPHY } from '../theme';
import { useSearchStore } from '../store/searchStore';
import { useLocationStore } from '../store/locationStore';

export default function SearchBar() {
    const inputRef = useRef<TextInput>(null);
    const [localQuery, setLocalQuery] = useState('');
    const { searchProducts, isLoading } = useSearchStore();
    const { pincode } = useLocationStore();

    const handleSearch = () => {
        if (localQuery.trim().length === 0) return;
        Keyboard.dismiss();
        searchProducts(localQuery.trim(), pincode);
    };

    const handleClear = () => {
        setLocalQuery('');
        inputRef.current?.focus();
    };

    return (
        <View style={styles.container}>
            {/* Search Icon */}
            <View style={styles.iconContainer}>
                <Text style={styles.searchIcon}>🔍</Text>
            </View>

            {/* Input */}
            <TextInput
                ref={inputRef}
                style={styles.input}
                placeholder='Search "Amul Butter", "Maggi"...'
                placeholderTextColor={COLORS.textTertiary}
                value={localQuery}
                onChangeText={setLocalQuery}
                onSubmitEditing={handleSearch}
                returnKeyType="search"
                autoCapitalize="none"
                autoCorrect={false}
            />

            {/* Clear Button */}
            {localQuery.length > 0 && (
                <Pressable onPress={handleClear} style={styles.clearBtn}>
                    <Text style={styles.clearText}>✕</Text>
                </Pressable>
            )}

            {/* Search Button */}
            <Pressable
                onPress={handleSearch}
                style={[styles.searchBtn, isLoading && styles.searchBtnDisabled]}
                disabled={isLoading}
            >
                <Text style={styles.searchBtnText}>
                    {isLoading ? '...' : 'Search'}
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.surface,
        borderRadius: RADIUS.xl,
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm,
        ...SHADOWS.card,
        gap: SPACING.sm,
    },
    iconContainer: {
        width: 28,
        alignItems: 'center',
    },
    searchIcon: {
        fontSize: 16,
    },
    input: {
        flex: 1,
        ...TYPOGRAPHY.body,
        paddingVertical: SPACING.sm,
        color: COLORS.textPrimary,
    },
    clearBtn: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: COLORS.backgroundAlt,
        alignItems: 'center',
        justifyContent: 'center',
    },
    clearText: {
        fontSize: 12,
        color: COLORS.textSecondary,
        fontWeight: '600',
    },
    searchBtn: {
        backgroundColor: COLORS.searchAccent,
        paddingHorizontal: SPACING.lg,
        paddingVertical: SPACING.sm + 2,
        borderRadius: RADIUS.pill,
    },
    searchBtnDisabled: {
        opacity: 0.6,
    },
    searchBtnText: {
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 14,
    },
});
