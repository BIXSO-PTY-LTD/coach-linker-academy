import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import ListSubheader from '@mui/material/ListSubheader';
import Paper from '@mui/material/Paper';
import Portal from '@mui/material/Portal';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect } from 'react';

import { useActiveLink, useBoolean } from '#shared/hooks';
import { navConfig } from '../../config-navigation';
import { NavListProps, NavSubListProps } from '../types';
import { NavItem } from './nav-item';

function NavSubList({ title, path }: NavSubListProps) {
    const pathname = usePathname();

    const active = pathname === path || pathname === `${path}/`;

    return (
        <Stack spacing={2}>
            <ListSubheader
                sx={{
                    p: 0,
                    typography: 'h6',
                    color: 'text.primary',
                    bgcolor: 'transparent',
                }}
            >
                {title}
            </ListSubheader>

            <Stack spacing={1.5} alignItems="flex-start">
                <NavItem key={title} title={title} path={path} active={active} subItem />
            </Stack>
        </Stack>
    );
}

export const NavList = ({ data }: NavListProps) => {
    const pathname = usePathname();

    const menuOpen = useBoolean();

    const active = useActiveLink(data.path, !!data.children);

    useEffect(() => {
        if (menuOpen.value) {
            menuOpen.onFalse();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    const handleOpenMenu = useCallback(() => {
        if (data.children) {
            menuOpen.onTrue();
        }
    }, [data.children, menuOpen]);

    return (
        <>
            <NavItem
                open={menuOpen.value}
                onMouseEnter={handleOpenMenu}
                onMouseLeave={menuOpen.onFalse}
                //
                title={data.title}
                path={data.path}
                //
                active={active}
                hasChild={!!data.children}
                externalLink={data.path.includes('http')}
            />

            {!!data.children && menuOpen.value && (
                <Portal>
                    <Fade in={menuOpen.value}>
                        <Paper
                            onMouseEnter={handleOpenMenu}
                            onMouseLeave={menuOpen.onFalse}
                            sx={{
                                top: 62,
                                width: 1,
                                borderRadius: 0,
                                position: 'fixed',
                                bgcolor: 'background.default',
                                zIndex: (theme) => theme.zIndex.modal,
                                boxShadow: (theme) => theme.customShadows.dialog,
                            }}
                        >
                            <Grid container columns={15}>
                                <Grid xs={12}>
                                    <Box
                                        gap={5}
                                        display="grid"
                                        gridTemplateColumns="repeat(5, 1fr)"
                                        sx={{
                                            p: 5,
                                            height: 1,
                                            position: 'relative',
                                            bgcolor: 'background.neutral',
                                        }}
                                    >
                                        {navConfig.map((list) => (
                                            <NavSubList key={list.title} title={list.title} path={list.path} />
                                        ))}
                                    </Box>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Fade>
                </Portal>
            )}
        </>
    );
};
