'use client';
import { SettingsProvider } from '#shared/contexts';
import { ThemeProvider } from '#shared/theme';
import { I_Children } from '#shared/typescript';

export default function AuthLayout({ children }: I_Children) {
    return (
        <SettingsProvider
            defaultSettings={{
                themeMode: 'light',
                themeDirection: 'ltr',
                themeColorPresets: 'default',
            }}
        >
            <ThemeProvider>{children}</ThemeProvider>
        </SettingsProvider>
    );
}
