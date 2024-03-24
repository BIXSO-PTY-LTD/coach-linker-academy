import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { RootLayout } from '#shared/layouts';
import { I_Children } from '#shared/typescript';

import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Coach Linker Academy',
    description: 'Built with love!',
    icons: {
        icon: '/assets/icons/favicon.ico',
    },
};

export default function AppLayout({ children }: I_Children) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <RootLayout>{children}</RootLayout>
            </body>
        </html>
    );
}
