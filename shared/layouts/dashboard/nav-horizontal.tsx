import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import { memo } from 'react';

import { HeaderShadow, NavSectionHorizontal, Scrollbar } from '#shared/components';
import { HEADER } from '#shared/constants';
import { useMockedUser, useNav } from '#shared/hooks';
import { bgBlur } from '#shared/theme/css';

const NavHorizontalRoot = () => {
    const theme = useTheme();

    const { user } = useMockedUser();

    const navData = useNav();

    return (
        <AppBar
            component="div"
            sx={{
                top: HEADER.H_DESKTOP_OFFSET,
            }}
        >
            <Toolbar
                sx={{
                    ...bgBlur({
                        color: theme.palette.background.default,
                    }),
                }}
            >
                <Scrollbar
                    sx={{
                        '& .simplebar-content': {
                            display: 'flex',
                        },
                    }}
                >
                    <NavSectionHorizontal
                        data={navData}
                        slotProps={{
                            currentRole: user?.role,
                        }}
                        sx={{
                            ...theme.mixins.toolbar,
                        }}
                    />
                </Scrollbar>
            </Toolbar>

            <HeaderShadow />
        </AppBar>
    );
};

export const NavHorizontal = memo(NavHorizontalRoot);
