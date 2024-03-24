import Masonry from '@mui/lab/Masonry';
import Button, { buttonClasses } from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack, { StackProps } from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { alpha, styled } from '@mui/material/styles';

import { _socials } from '#shared/_mock';
import { Iconify, Logo, RouterLink } from '#shared/components';
import { useBoolean, useResponsive } from '#shared/hooks';
import { usePathname } from 'next/navigation';
import { navConfig, navSupport } from './config-navigation';
import { NavSubListProps } from './nav/types';

const StyledAppStoreButton = styled(Button)(({ theme }) => ({
    flexShrink: 0,
    padding: '5px 12px',
    color: theme.palette.common.white,
    border: `solid 1px ${alpha(theme.palette.common.black, 0.24)}`,
    background: `linear-gradient(180deg, ${theme.palette.grey[900]} 0%, ${theme.palette.common.black} 100%)`,
    [`& .${buttonClasses.startIcon}`]: {
        marginLeft: 0,
    },
}));

export default function Footer() {
    const mdUp = useResponsive('up', 'md');

    const mainFooter = (
        <>
            <Divider />

            <Container
                sx={{
                    overflow: 'hidden',
                    py: { xs: 8, md: 10 },
                }}
            >
                <Grid container spacing={3} justifyContent={{ md: 'space-between' }}>
                    <Grid xs={12} md={4}>
                        <Stack spacing={{ xs: 3, md: 5 }}>
                            <Stack alignItems="flex-start" spacing={3}>
                                <Logo />

                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Chúng tôi tự hào mang lại điều tốt nhất cho mọi khách hàng. Với cam kết chất lượng,
                                    sự tận tâm và dịch vụ đa dạng, chúng tôi không chỉ đáp ứng mà còn vượt xa kỳ vọng
                                    của bạn.
                                </Typography>
                            </Stack>

                            <Stack spacing={2}>
                                <Typography variant="h6">Liên kết</Typography>
                                <Stack direction="row" alignItems="center">
                                    {_socials.map((social) => (
                                        <IconButton key={social.value} color="primary">
                                            <Iconify icon={social.icon} />
                                        </IconButton>
                                    ))}
                                </Stack>
                            </Stack>

                            <Stack spacing={2}>
                                <Typography variant="h6">Apps</Typography>
                                <AppStoreButton />
                            </Stack>
                        </Stack>
                    </Grid>

                    <Grid xs={12} md={6}>
                        {mdUp ? (
                            <Stack direction="row">
                                <Masonry columns={1} spacing={2} defaultColumns={4} defaultSpacing={2}>
                                    <Typography variant="subtitle2">Tổng Quan</Typography>
                                    {navConfig.map((list) => (
                                        <ListDesktop key={list.title} list={list} />
                                    ))}
                                </Masonry>

                                <Masonry columns={1} spacing={2} defaultColumns={4} defaultSpacing={2}>
                                    <Typography variant="subtitle2">Hỗ trợ khách hàng</Typography>
                                    {navSupport.map((list) => (
                                        <ListDesktop key={list.title} list={list} />
                                    ))}
                                </Masonry>
                            </Stack>
                        ) : (
                            <Stack spacing={3}>
                                <Stack spacing={1.5}>
                                    {navConfig.map((list) => (
                                        <ListMobile key={list.title} list={list} />
                                    ))}
                                </Stack>
                                <Stack spacing={1.5}>
                                    {navSupport.map((list) => (
                                        <ListMobile key={list.title} list={list} />
                                    ))}
                                </Stack>
                            </Stack>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </>
    );

    return <footer>{mainFooter}</footer>;
}

export function ListDesktop({ list }: { list: NavSubListProps }) {
    const pathname = usePathname();
    const active = pathname === list.path || pathname === `${list.path}/`;
    return (
        <Stack spacing={1.5} alignItems="flex-start">
            <Link
                component={RouterLink}
                key={list.title}
                href={list.path}
                variant="caption"
                sx={{
                    color: 'text.secondary',
                    '&:hover': {
                        color: 'text.primary',
                    },
                    ...(active && {
                        color: 'text.primary',
                        fontWeight: 'fontWeightSemiBold',
                    }),
                }}
            >
                {list.title}
            </Link>
        </Stack>
    );
}

export function ListMobile({ list }: { list: NavSubListProps }) {
    const pathname = usePathname();

    const listExpand = useBoolean();

    return (
        <Stack spacing={1.5} alignItems="flex-start">
            <Typography
                variant="subtitle2"
                onClick={listExpand.onToggle}
                sx={{
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                }}
            >
                {list.title}
                <Iconify
                    width={16}
                    icon={listExpand.value ? 'carbon:chevron-down' : 'carbon:chevron-right'}
                    sx={{ ml: 0.5 }}
                />
            </Typography>

            <Collapse in={listExpand.value} unmountOnExit sx={{ width: 1 }}>
                <Stack spacing={1.5} alignItems="flex-start">
                    <Link
                        component={RouterLink}
                        key={list.title}
                        href={list.path}
                        variant="caption"
                        sx={{
                            color: 'text.secondary',
                            '&:hover': {
                                color: 'text.primary',
                            },
                            ...(pathname === `${list.path}/` && {
                                color: 'text.primary',
                                fontWeight: 'fontWeightSemiBold',
                            }),
                        }}
                    >
                        {list.title}
                    </Link>
                </Stack>
            </Collapse>
        </Stack>
    );
}

function AppStoreButton({ ...other }: StackProps) {
    return (
        <Stack direction="row" flexWrap="wrap" spacing={2} {...other}>
            <StyledAppStoreButton startIcon={<Iconify icon="ri:apple-fill" width={28} />}>
                <Stack alignItems="flex-start">
                    <Typography variant="caption" sx={{ opacity: 0.72 }}>
                        Download on the
                    </Typography>

                    <Typography variant="h6" sx={{ mt: -0.5 }}>
                        Apple Store
                    </Typography>
                </Stack>
            </StyledAppStoreButton>

            <StyledAppStoreButton startIcon={<Iconify icon="logos:google-play-icon" width={28} />}>
                <Stack alignItems="flex-start">
                    <Typography variant="caption" sx={{ opacity: 0.72 }}>
                        Download from
                    </Typography>

                    <Typography variant="h6" sx={{ mt: -0.5 }}>
                        Google Play
                    </Typography>
                </Stack>
            </StyledAppStoreButton>
        </Stack>
    );
}
