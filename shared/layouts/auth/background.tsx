import Stack from '@mui/material/Stack';
import { alpha, useTheme } from '@mui/material/styles';

import { LayoutWrapper } from '#shared/layouts/layout-wrapper';
import { bgGradient } from '#shared/theme/css';
import { I_Children } from '#shared/typescript';

export const AuthBackgroundLayout = ({ children }: I_Children) => {
    const theme = useTheme();

    return (
        <LayoutWrapper>
            <Stack
                alignItems="center"
                justifyContent="center"
                sx={{
                    ...bgGradient({
                        color: alpha(theme.palette.background.default, 0.9),
                        imgUrl: '/assets/images/background/overlay_1.jpg',
                    }),
                    px: 2,
                    py: 12,
                    minHeight: '100vh',
                }}
            >
                <Stack
                    spacing={4}
                    sx={{
                        p: 4,
                        width: 1,
                        mx: 'auto',
                        flexShrink: 0,
                        maxWidth: 400,
                        borderRadius: 2,
                        bgcolor: 'background.default',
                        boxShadow: theme.customShadows.z24,
                        textAlign: { xs: 'center', md: 'left' },
                    }}
                >
                    {children}
                </Stack>
            </Stack>
        </LayoutWrapper>
    );
};
