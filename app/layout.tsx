import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { LanguageProvider, LoadingProvider } from '#shared/contexts';
import { BlankLayout } from '#shared/layouts';

import 'react-toastify/dist/ReactToastify.css';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Coach Linker Academy',
    description: 'Built with love!',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <LanguageProvider>
                    <LoadingProvider>
                        <BlankLayout>{children}</BlankLayout>
                    </LoadingProvider>
                </LanguageProvider>
            </body>
        </html>
    );
}
