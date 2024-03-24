'use client';
import isEqual from 'lodash.isequal';
import { useCallback, useMemo, useState } from 'react';

import { useLocalStorage } from '#shared/hooks';
import { SettingsContext, SettingsContextDashboard } from './settings-context';
import {
    T_SettingsContextDashboardProps,
    T_SettingsContextProps,
    T_SettingsValueDashboardProps,
    T_SettingsValueProps,
} from './types';

const STORAGE_KEY = 'settings';
const STORAGE_KEY_DASHBOARD = 'settings';

type T_SettingsProviderProps = {
    children: React.ReactNode;
    defaultSettings: T_SettingsValueProps;
};

export const SettingsProvider = ({ children, defaultSettings }: T_SettingsProviderProps) => {
    const { value, set, remove } = useLocalStorage(STORAGE_KEY, defaultSettings);

    const [openDrawer, setOpenDrawer] = useState(false);

    // Drawer
    const onToggleDrawer = useCallback(() => {
        setOpenDrawer((prev) => !prev);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setOpenDrawer(false);
    }, []);

    const canReset = !isEqual(value, defaultSettings);

    const memoizedValue = useMemo(
        () => ({
            ...value,
            onUpdate: (newValue: any) => set({ ...value, ...newValue }),
            // Reset
            canReset,
            onReset: remove,
            // Drawer
            open: openDrawer,
            onToggle: onToggleDrawer,
            onClose: onCloseDrawer,
        }),
        [canReset, onCloseDrawer, onToggleDrawer, openDrawer, remove, value, set],
    );

    return (
        <SettingsContext.Provider value={memoizedValue as T_SettingsContextProps}>{children}</SettingsContext.Provider>
    );
};

type T_SettingsProviderDashboardProps = {
    children: React.ReactNode;
    defaultSettings: T_SettingsValueDashboardProps;
};

export const SettingsProviderDashboard = ({ children, defaultSettings }: T_SettingsProviderDashboardProps) => {
    const { value, set, remove } = useLocalStorage(STORAGE_KEY_DASHBOARD, defaultSettings);

    const [openDrawer, setOpenDrawer] = useState(false);

    // Direction by lang
    const onChangeDirectionByLang = useCallback(
        (lang: string) => {
            if (value) {
                set({ ...value, themeDirection: 'ltr' });
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [set],
    );

    // Drawer
    const onToggleDrawer = useCallback(() => {
        setOpenDrawer((prev) => !prev);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setOpenDrawer(false);
    }, []);

    const canReset = !isEqual(value, defaultSettings);

    const memoizedValue = useMemo(
        () => ({
            ...value,
            onUpdate: (newValue: any) => set({ ...value, ...newValue }),
            // Direction
            onChangeDirectionByLang,
            // Reset
            canReset,
            onReset: remove,
            // Drawer
            open: openDrawer,
            onToggle: onToggleDrawer,
            onClose: onCloseDrawer,
        }),
        [remove, set, value, canReset, openDrawer, onCloseDrawer, onToggleDrawer, onChangeDirectionByLang],
    );

    return (
        <SettingsContextDashboard.Provider value={memoizedValue as T_SettingsContextDashboardProps}>
            {children}
        </SettingsContextDashboard.Provider>
    );
};
