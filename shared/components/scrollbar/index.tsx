import Box from '@mui/material/Box';
import { forwardRef, memo, useEffect, useState } from 'react';

import { StyledRootScrollbar, StyledScrollbar } from './styles';
import { I_ScrollbarProps } from './types';

const ScrollbarRoot = forwardRef<HTMLDivElement, I_ScrollbarProps>(({ children, sx, ...other }, ref) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

    const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    if (mobile || !isMounted) {
        return (
            <Box ref={ref} sx={{ overflow: 'auto', ...sx }} {...other}>
                {children}
            </Box>
        );
    }

    return (
        <StyledRootScrollbar>
            <StyledScrollbar
                scrollableNodeProps={{
                    ref,
                }}
                clickOnTrack={false}
                sx={sx}
                {...other}
            >
                {children}
            </StyledScrollbar>
        </StyledRootScrollbar>
    );
});

export const Scrollbar = memo(ScrollbarRoot);

ScrollbarRoot.displayName = 'Scrollbar';
