'use client';
import { createContext, useContext } from 'react';

import { T_SettingsContextProps } from './types';

export const SettingsContext = createContext({} as T_SettingsContextProps);

export const useSettingsContext = () => {
    const context = useContext(SettingsContext);

    if (!context) throw new Error('useSettingsContext must be use inside SettingsProvider');

    return context;
};
