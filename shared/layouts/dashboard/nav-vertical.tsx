import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import { useEffect } from 'react';

import { Logo, NavSectionVertical, NavToggleButton, NavUpgrade, Scrollbar } from '#shared/components';
import { NAV } from '#shared/constants';
import { useMockedUser, useNav, usePathname, useResponsive } from '#shared/hooks';

type T_NavVerticalProps = {
    openNav: boolean;
    onCloseNav: VoidFunction;
};

export const NavVertical = ({ openNav, onCloseNav }: T_NavVerticalProps) => {
    const { user } = useMockedUser();

    const pathname = usePathname();

    const lgUp = useResponsive('up', 'lg');

    const navData = useNav();

    useEffect(() => {
        if (openNav) {
            onCloseNav();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    const renderContent = (
        <Scrollbar
            sx={{
                height: 1,
                '& .simplebar-content': {
                    height: 1,
                    display: 'flex',
                    flexDirection: 'column',
                },
            }}
        >
            <Logo sx={{ mt: 3, ml: 4, mb: 1 }} />

            <NavSectionVertical
                data={navData}
                slotProps={{
                    currentRole: user?.role,
                }}
            />

            <Box sx={{ flexGrow: 1 }} />

            <NavUpgrade />
        </Scrollbar>
    );

    return (
        <Box
            sx={{
                flexShrink: { lg: 0 },
                width: { lg: NAV.W_VERTICAL },
            }}
        >
            <NavToggleButton />

            {lgUp ? (
                <Stack
                    sx={{
                        height: 1,
                        position: 'fixed',
                        width: NAV.W_VERTICAL,
                        borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
                    }}
                >
                    {renderContent}
                </Stack>
            ) : (
                <Drawer
                    open={openNav}
                    onClose={onCloseNav}
                    PaperProps={{
                        sx: {
                            width: NAV.W_VERTICAL,
                        },
                    }}
                >
                    {renderContent}
                </Drawer>
            )}
        </Box>
    );
};
