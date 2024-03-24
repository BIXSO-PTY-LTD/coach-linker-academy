import Box from '@mui/material/Box';

import { SettingsProviderDashboard } from '#shared/contexts';
import { useBoolean, useResponsive, useSettingsContextDashboard } from '#shared/hooks';
import { ThemeProvider } from '#shared/theme-dashboard';
import { I_Children } from '#shared/typescript';
import { Header } from './header';
import { Main } from './main';
import { NavHorizontal } from './nav-horizontal';
import { NavMini } from './nav-mini';
import { NavVertical } from './nav-vertical';

const DashboardLayoutContent = ({ children }: I_Children) => {
    const settings = useSettingsContextDashboard();

    const lgUp = useResponsive('up', 'lg');

    const nav = useBoolean();

    const isHorizontal = settings.themeLayout === 'horizontal';

    const isMini = settings.themeLayout === 'mini';

    const renderNavMini = <NavMini />;

    const renderHorizontal = <NavHorizontal />;

    const renderNavVertical = <NavVertical openNav={nav.value} onCloseNav={nav.onFalse} />;

    if (isHorizontal) {
        return (
            <>
                <Header onOpenNav={nav.onTrue} />

                {lgUp ? renderHorizontal : renderNavVertical}

                <Main>{children}</Main>
            </>
        );
    }

    if (isMini) {
        return (
            <>
                <Header onOpenNav={nav.onTrue} />

                <Box
                    sx={{
                        minHeight: 1,
                        display: 'flex',
                        flexDirection: { xs: 'column', lg: 'row' },
                    }}
                >
                    {lgUp ? renderNavMini : renderNavVertical}

                    <Main>{children}</Main>
                </Box>
            </>
        );
    }

    return (
        <>
            <Header onOpenNav={nav.onTrue} />

            <Box
                sx={{
                    minHeight: 1,
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                }}
            >
                {renderNavVertical}

                <Main>{children}</Main>
            </Box>
        </>
    );
};

export const DashboardLayout = ({ children }: I_Children) => {
    return (
        <SettingsProviderDashboard
            defaultSettings={{
                themeMode: 'light',
                themeDirection: 'ltr',
                themeContrast: 'default',
                themeLayout: 'vertical',
                themeColorPresets: 'default',
                themeStretch: false,
            }}
        >
            <ThemeProvider>
                <DashboardLayoutContent>{children}</DashboardLayoutContent>
            </ThemeProvider>
        </SettingsProviderDashboard>
    );
};
