import Box, { BoxProps } from '@mui/material/Box';

import { HEADER } from '#shared/constants';
import { SettingsProvider } from '#shared/contexts';
import { ThemeProvider } from '#shared/theme';
import Footer from './footer';
import Header from './header';

type T_MainWrapperProps = BoxProps & {
    children: React.ReactNode;
    headerOnDark?: boolean;
    disabledSpacing?: boolean;
};

export const MainLayout = ({
    children,
    headerOnDark = false,
    disabledSpacing = false,
    sx,
    ...other
}: T_MainWrapperProps) => {
    return (
        <SettingsProvider
            defaultSettings={{
                themeMode: 'light',
                themeDirection: 'ltr',
                themeColorPresets: 'default',
            }}
        >
            <ThemeProvider>
                <Box
                    sx={{
                        height: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        ...sx,
                    }}
                    {...other}
                >
                    <Header headerOnDark={headerOnDark} />

                    <Box component="main" sx={{ flexGrow: 1 }}>
                        {!(disabledSpacing || headerOnDark) && (
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
            </ThemeProvider>
        </SettingsProvider>
    );
};
