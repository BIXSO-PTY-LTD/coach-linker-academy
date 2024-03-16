import Box, { BoxProps } from '@mui/material/Box';
import { m, MotionProps } from 'framer-motion';

import { useResponsive } from '#shared/hooks';
import { varContainer } from './variants';

type T_Props = BoxProps & MotionProps;

interface I_MotionViewportProps extends T_Props {
    children: React.ReactNode;
    disableAnimatedMobile?: boolean;
}

export default function MotionViewport({ children, disableAnimatedMobile = true, ...other }: I_MotionViewportProps) {
    const smDown = useResponsive('down', 'sm');

    if (smDown && disableAnimatedMobile) {
        return <Box {...other}>{children}</Box>;
    }

    return (
        <Box
            component={m.div}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={varContainer()}
            {...other}
        >
            {children}
        </Box>
    );
}
