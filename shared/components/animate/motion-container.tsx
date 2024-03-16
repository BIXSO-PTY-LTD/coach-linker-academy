import Box, { BoxProps } from '@mui/material/Box';
import { m, MotionProps } from 'framer-motion';

import { varContainer } from './variants';

type T_Props = BoxProps & MotionProps;

export interface I_MotionContainerProps extends T_Props {
    animate?: boolean;
    action?: boolean;
}

export default function MotionContainer({ animate, action = false, children, ...other }: I_MotionContainerProps) {
    if (action) {
        return (
            <Box
                component={m.div}
                initial={false}
                animate={animate ? 'animate' : 'exit'}
                variants={varContainer()}
                {...other}
            >
                {children}
            </Box>
        );
    }

    return (
        <Box component={m.div} initial="initial" animate="animate" exit="exit" variants={varContainer()} {...other}>
            {children}
        </Box>
    );
}
