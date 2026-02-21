/**
 * QuickCompare — Location Store (Zustand)
 */
import { create } from 'zustand';

interface LocationState {
    pincode: string;
    displayAddress: string;

    setLocation: (pincode: string, displayAddress: string) => void;
}

export const useLocationStore = create<LocationState>((set) => ({
    // Demo defaults
    pincode: '122001',
    displayAddress: 'Sector 43, Gurugram',

    setLocation: (pincode: string, displayAddress: string) =>
        set({ pincode, displayAddress }),
}));
