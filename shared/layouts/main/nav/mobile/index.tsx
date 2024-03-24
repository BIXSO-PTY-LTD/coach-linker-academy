import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import { useEffect } from 'react';

import { Iconify, Logo, Scrollbar } from '#shared/components';
import { NAV } from '#shared/constants';
import { useBoolean, usePathname } from '#shared/hooks';
import { NavProps } from '../types';
import { NavList } from './nav-list';

export default function NavMobile({ data }: NavProps) {
    const pathname = usePathname();

    const mobileOpen = useBoolean();

    useEffect(() => {
        if (mobileOpen.value) {
            mobileOpen.onFalse();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <>
            <IconButton onClick={mobileOpen.onTrue} sx={{ ml: 1, color: 'inherit' }}>
                <Iconify icon="carbon:menu" />
            </IconButton>

            <Drawer
                open={mobileOpen.value}
                onClose={mobileOpen.onFalse}
                PaperProps={{
                    sx: {
                        pb: 5,
                        width: NAV.W_VERTICAL,
                    },
                }}
            >
                <Scrollbar>
                    <Logo sx={{ mx: 2.5, my: 3 }} />

                    <List component="nav" disablePadding>
                        {data.map((list) => (
                            <NavList key={list.title} data={list} />
                        ))}
                    </List>

                    <Stack spacing={1.5} sx={{ p: 3 }}>
                        <Button fullWidth variant="contained" color="inherit" href={'#'} target="_blank" rel="noopener">
                            Buy Now
                        </Button>
                    </Stack>
                </Scrollbar>
            </Drawer>
        </>
    );
}