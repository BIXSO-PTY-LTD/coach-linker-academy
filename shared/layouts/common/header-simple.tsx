import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';

import { Logo } from '#shared/components';
import { HEADER } from '#shared/constants';
import { useOffSetTop } from '#shared/hooks';
import { bgBlur } from '#shared/theme/css';
import { HeaderShadow } from './header-shadow';

export const HeaderSimple = () => {
    const theme = useTheme();

    const offset = useOffSetTop(HEADER.H_DESKTOP);

    return (
        <AppBar>
            <Toolbar
                sx={{
                    height: {
                        xs: HEADER.H_MOBILE,
                        md: HEADER.H_DESKTOP,
                    },
                    transition: theme.transitions.create(['height'], {
                        easing: theme.transitions.easing.easeInOut,
                        duration: theme.transitions.duration.shorter,
                    }),
                    ...(offset && {
                        ...bgBlur({
                            color: theme.palette.background.default,
                        }),
                        height: {
                            md: HEADER.H_DESKTOP_OFFSET,
                        },
                    }),
                }}
            >
                <Logo />
            </Toolbar>

            {offset && <HeaderShadow />}
        </AppBar>
    );
};
