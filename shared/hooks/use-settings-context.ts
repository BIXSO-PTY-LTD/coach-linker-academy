import { useContext } from 'react';

import { SettingsContext, SettingsContextDashboard } from '#shared/contexts';

export const useSettingsContext = () => {
    const context = useContext(SettingsContext);

    if (!context) throw new Error('useSettingsContext must be use inside SettingsProvider');

    return context;
};

export const useSettingsContextDashboard = () => {
    const context = useContext(SettingsContextDashboard);

    if (!context) throw new Error('useSettingsContext must be use inside SettingsProvider');

    return context;
};
