import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';

import { Image } from '#shared/components';
import { useResponsive } from '#shared/hooks';
import { LayoutWrapper } from '#shared/layouts/layout-wrapper';
import { I_Children } from '#shared/typescript';

export const AuthIllustrationLayout = ({ children }: I_Children) => {
    const mdUp = useResponsive('up', 'md');

    return (
        <LayoutWrapper>
            <Container
                sx={{
                    pb: 10,
                    minHeight: 1,
                    pt: { xs: 12, md: 21 },
                }}
            >
                <Grid container columnSpacing={{ md: 5 }} justifyContent="space-between">
                    {mdUp && (
                        <Grid xs={12} md={7}>
                            <Image
                                visibleByDefault
                                disabledEffect
                                alt="login"
                                src="/assets/images/illustrations/illustration_login.svg"
                            />
                        </Grid>
                    )}

                    <Grid xs={12} md={5} lg={4}>
                        <Stack
                            spacing={4}
                            sx={{
                                p: 4,
                                borderRadius: 2,
                                textAlign: { xs: 'center', md: 'left' },
                                boxShadow: (theme) => theme.customShadows.z24,
                            }}
                        >
                            {children}
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </LayoutWrapper>
    );
};
