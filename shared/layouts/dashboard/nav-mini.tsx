import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { Logo, NavSectionMini, NavToggleButton } from '#shared/components';
import { NAV } from '#shared/constants';
import { useNav } from '#shared/hooks';
import { hideScroll } from '#shared/theme/css';
import { useMockedUser } from 'shared/hooks';

export const NavMini = () => {
    const { user } = useMockedUser();

    const navData = useNav();

    return (
        <Box
            sx={{
                flexShrink: { lg: 0 },
                width: { lg: NAV.W_MINI },
            }}
        >
            <NavToggleButton
                sx={{
                    top: 22,
                    left: NAV.W_MINI - 12,
                }}
            />

            <Stack
                sx={{
                    pb: 2,
                    height: 1,
                    position: 'fixed',
                    width: NAV.W_MINI,
                    borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
                    ...hideScroll.x,
                }}
            >
                <Logo sx={{ mx: 'auto', my: 2 }} />

                <NavSectionMini
                    data={navData}
                    slotProps={{
                        currentRole: user?.role,
                    }}
                />
            </Stack>
        </Box>
    );
};
