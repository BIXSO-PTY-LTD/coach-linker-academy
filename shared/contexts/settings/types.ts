export type T_SettingsValueProps = {
    themeMode: 'light' | 'dark';
    themeDirection: 'rtl' | 'ltr';
    themeColorPresets: 'default' | 'preset01' | 'preset02' | 'preset03' | 'preset04' | 'preset05';
};

export type T_SettingsContextProps = T_SettingsValueProps & {
    // Update
    onUpdate: (value: any) => void;
    // Reset
    canReset: boolean;
    onReset: VoidFunction;
    // Drawer
    open: boolean;
    onToggle: VoidFunction;
    onClose: VoidFunction;
};

export type T_SettingsValueDashboardProps = {
    themeStretch: boolean;
    themeMode: 'light' | 'dark';
    themeDirection: 'rtl' | 'ltr';
    themeContrast: 'default' | 'bold';
    themeLayout: 'vertical' | 'horizontal' | 'mini';
    themeColorPresets: 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red';
};

export type T_SettingsContextDashboardProps = T_SettingsValueDashboardProps & {
    // Update
    onUpdate: (value: any) => void;
    // Direction by lang
    onChangeDirectionByLang: (lang: string) => void;
    // Reset
    canReset: boolean;
    onReset: VoidFunction;
    // Drawer
    open: boolean;
    onToggle: VoidFunction;
    onClose: VoidFunction;
};
