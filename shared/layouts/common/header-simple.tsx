import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';

import { bgBlur } from '#shared/theme/css';

import Logo from '#shared/components/logo';

import { HEADER } from '../config-layout';
import HeaderShadow from './header-shadow';
import SettingsButton from './settings-button';
import { useOffSetTop } from '#shared/hooks/use-off-set-top';
import { PATHS } from '#app/routes';
import { RouterLink } from '#shared/components';

// ----------------------------------------------------------------------

export default function HeaderSimple() {
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
}
