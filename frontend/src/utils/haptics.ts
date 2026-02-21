/**
 * QuickCompare — Haptic Feedback Utility
 */
import * as Haptics from 'expo-haptics';

export function lightTap() {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
}

export function mediumTap() {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
}

export function selectionTap() {
    Haptics.selectionAsync();
}
