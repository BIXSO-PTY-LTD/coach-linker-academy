'use client';
import isEqual from 'lodash.isequal';
import { useCallback, useMemo, useState } from 'react';

import { useLocalStorage } from '#shared/hooks';
import { SettingsContext } from './settings-context';
import { T_SettingsContextProps, T_SettingsValueProps } from './types';

const STORAGE_KEY = 'settings';

type T_SettingsProviderProps = {
    children: React.ReactNode;
    defaultSettings: T_SettingsValueProps;
};

export function SettingsProvider({ children, defaultSettings }: T_SettingsProviderProps) {
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
            onUpdate: (_: string, newValue: any) => set(newValue),
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
}
