'use client';
import { createContext } from 'react';

import { T_SettingsContextProps, T_SettingsContextDashboardProps } from './types';

export const SettingsContext = createContext({} as T_SettingsContextProps);

export const SettingsContextDashboard = createContext({} as T_SettingsContextDashboardProps);
