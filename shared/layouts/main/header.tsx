import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';

import { Logo } from '#shared/components';
import { HEADER } from '#shared/constants';
import { useResponsive } from '#shared/hooks';
import { useOffSetTop } from '#shared/hooks/use-off-set-top';
import { bgBlur } from '#shared/theme/css';
import { HeaderShadow } from '../common/header-shadow';
import { Searchbar } from '../common/searchbar';
import { SettingsButton } from '../common/settings-button';
import { navConfig } from './config-navigation';
import { NavDesktop } from './nav/desktop';
import { NavMobile } from './nav/mobile';

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
                    <Button variant="contained" color="inherit" href={'#'} target="_blank" rel="noopener">
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
