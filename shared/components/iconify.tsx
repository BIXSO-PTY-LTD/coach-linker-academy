import { Icon, IconifyIcon } from '@iconify/react';
import Box, { BoxProps } from '@mui/material/Box';
import { forwardRef } from 'react';

export type T_IconifyProps = IconifyIcon | string;

interface I_IconifyProps extends BoxProps {
    icon: T_IconifyProps;
}

export const Iconify = forwardRef<SVGElement, I_IconifyProps>(({ icon, width = 20, sx, ...other }, ref) => (
    <Box
        ref={ref}
        component={Icon}
        className="component-iconify"
        icon={icon}
        sx={{ width, height: width, ...sx }}
        {...other}
    />
));

Iconify.displayName = 'Iconify';
