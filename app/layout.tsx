import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { LanguageProvider, LoadingProvider, SettingsProvider } from '#shared/contexts';
import { BlankLayout } from '#shared/layouts';
import ThemeProvider from '#shared/theme';
import { I_Children } from '#shared/typescript';

import 'react-toastify/dist/ReactToastify.css';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Coach Linker Academy',
    description: 'Built with love!',
    icons: {
        icon: '/assets/icons/favicon.ico',
    },
};

export default function RootLayout({ children }: Readonly<I_Children>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <SettingsProvider
                    defaultSettings={{
                        themeMode: 'light',
                        themeDirection: 'ltr',
                        themeColorPresets: 'default',
                    }}
                >
                    <ThemeProvider>
                        <LanguageProvider>
                            <LoadingProvider>
                                <BlankLayout>{children}</BlankLayout>
                            </LoadingProvider>
                        </LanguageProvider>
                    </ThemeProvider>
                </SettingsProvider>
            </body>
        </html>
    );
}
