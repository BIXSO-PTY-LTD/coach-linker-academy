import Box from '@mui/material/Box';
import { usePathname } from 'next/navigation';

import { ProgressBar } from '#shared/components';
import { MotionLazy } from '#shared/components/animate/motion-lazy';
import { HEADER } from '#shared/constants';
import { SettingsProvider } from '#shared/contexts';
import { ThemeProvider } from '#shared/theme';
import { I_Children } from '#shared/typescript';
import Footer from './footer';
import Header from './header';

const pathsOnDark = ['/career', '/travel'];

const spacingLayout = [...pathsOnDark, '/', '/e-learning', '/marketing'];

export const MainLayout = ({ children }: I_Children) => {
    const pathname = usePathname();

    const actionPage = (arr: string[]) => arr.some((path) => pathname === path || pathname === `${path}/`);

    return (
        <SettingsProvider
            defaultSettings={{
                themeMode: 'light',
                themeDirection: 'ltr',
                themeColorPresets: 'default',
            }}
        >
            <ThemeProvider>
                <MotionLazy>
                    <ProgressBar />
                    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
                        <Header headerOnDark={actionPage(pathsOnDark)} />

                        <Box
                            component="main"
                            sx={{
                                flexGrow: 1,
                                pt: 10,
                            }}
                        >
                            {!actionPage(spacingLayout) && (
                                <Box
                                    sx={{
                                        height: { xs: HEADER.H_MOBILE, md: HEADER.H_DESKTOP },
                                    }}
                                />
                            )}

                            {children}
                        </Box>

                        <Footer />
                    </Box>
                </MotionLazy>
            </ThemeProvider>
        </SettingsProvider>
    );
};
