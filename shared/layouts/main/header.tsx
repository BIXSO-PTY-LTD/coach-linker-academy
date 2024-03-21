import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import { bgBlur } from '#shared/theme/css';

import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';
import { HEADER } from '../config-layout';
import { navConfig } from './config-navigation';
import { useOffSetTop } from '#shared/hooks/use-off-set-top';
import { useResponsive } from '#shared/hooks';
import Logo from '#shared/components/logo';
import Searchbar from '../common/searchbar';
import SettingsButton from '../common/settings-button';
import { PATHS } from '#app/routes';
import HeaderShadow from '../common/header-shadow';

// ----------------------------------------------------------------------

type Props = {
    headerOnDark: boolean;
};

export default function Header({ headerOnDark }: Props) {
    const theme = useTheme();

    const offset = useOffSetTop();

    const mdUp = useResponsive('up', 'md');

    const renderContent = (
        <>
            <Box sx={{ lineHeight: 0, position: 'relative' }}>
                <Logo />

                <Link href="https://zone-docs.vercel.app/changelog" target="_blank" rel="noopener"></Link>
            </Box>

            {mdUp ? (
                <Stack flexGrow={1} alignItems="center" sx={{ height: 1 }}>
                    <NavDesktop data={navConfig} />
                </Stack>
            ) : (
                <Box sx={{ flexGrow: 1 }} />
            )}

            <Stack spacing={2} direction="row" alignItems="center" justifyContent="flex-end">
                <Stack spacing={1} direction="row" alignItems="center">
                    <Searchbar />

                    <SettingsButton />
                </Stack>

                {mdUp && (
                    <Button variant="contained" color="inherit" href={PATHS.ROOT} target="_blank" rel="noopener">
                        Buy Now
                    </Button>
                )}
            </Stack>

            {!mdUp && <NavMobile data={navConfig} />}
        </>
    );

    return (
        <AppBar>
            <Toolbar
                disableGutters
                sx={{
                    height: {
                        xs: HEADER.H_MOBILE,
                        md: HEADER.H_DESKTOP,
                    },
                    transition: theme.transitions.create(['height', 'background-color'], {
                        easing: theme.transitions.easing.easeInOut,
                        duration: theme.transitions.duration.shorter,
                    }),
                    ...(headerOnDark && {
                        color: 'common.white',
                    }),
                    ...(offset && {
                        ...bgBlur({ color: theme.palette.background.default }),
                        color: 'text.primary',
                        height: {
                            md: HEADER.H_DESKTOP - 16,
                        },
                    }),
                }}
            >
                <Container
                    sx={{
                        height: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {renderContent}
                </Container>
            </Toolbar>

            {offset && <HeaderShadow />}
        </AppBar>
    );
}
