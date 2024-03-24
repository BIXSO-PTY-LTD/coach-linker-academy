import { menuItemClasses } from '@mui/material/MenuItem';
import Popover, { PopoverOrigin } from '@mui/material/Popover';

import { I_MenuPopoverProps } from '#shared/typescript';
import { StyledArrow } from './styles';
import { getPosition } from './utils';

export const CustomPopover = ({
    open,
    children,
    arrow = 'top-right',
    hiddenArrow,
    sx,
    ...other
}: I_MenuPopoverProps) => {
    const { style, anchorOrigin, transformOrigin } = getPosition(arrow);

    return (
        <Popover
            open={Boolean(open)}
            anchorEl={open}
            anchorOrigin={anchorOrigin as PopoverOrigin}
            transformOrigin={transformOrigin as PopoverOrigin}
            slotProps={{
                paper: {
                    sx: {
                        width: 'auto',
                        overflow: 'inherit',
                        ...style,
                        [`& .${menuItemClasses.root}`]: {
                            '& svg': {
                                mr: 2,
                                flexShrink: 0,
                            },
                        },
                        ...sx,
                    },
                },
            }}
            {...other}
        >
            {!hiddenArrow && <StyledArrow arrow={arrow} />}

            {children}
        </Popover>
    );
};
