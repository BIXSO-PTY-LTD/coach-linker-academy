import Box, { BoxProps } from '@mui/material/Box';

import { HEADER, NAV } from '#shared/constants';
import { useResponsive, useSettingsContext } from '#shared/hooks';

const SPACING = 8;

export const Main = ({ children, sx, ...other }: BoxProps) => {
    const settings = useSettingsContext();

    const lgUp = useResponsive('up', 'lg');

    const isNavHorizontal = settings.themeLayout === 'horizontal';

    const isNavMini = settings.themeLayout === 'mini';

    if (isNavHorizontal) {
        return (
            <Box
                component="main"
                sx={{
                    minHeight: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    pt: `${HEADER.H_MOBILE + 24}px`,
                    pb: 10,
                    ...(lgUp && {
                        pt: `${HEADER.H_MOBILE * 2 + 40}px`,
                        pb: 15,
                    }),
                }}
            >
                {children}
            </Box>
        );
    }

    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                minHeight: 1,
                display: 'flex',
                flexDirection: 'column',
                py: `${HEADER.H_MOBILE + SPACING}px`,
                ...(lgUp && {
                    px: 2,
                    py: `${HEADER.H_DESKTOP + SPACING}px`,
                    width: `calc(100% - ${NAV.W_VERTICAL}px)`,
                    ...(isNavMini && {
                        width: `calc(100% - ${NAV.W_MINI}px)`,
                    }),
                }),
                ...sx,
            }}
            {...other}
        >
            {children}
        </Box>
    );
};