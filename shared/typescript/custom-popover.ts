import { PopoverProps } from '@mui/material/Popover';

export type T_MenuPopoverArrowValue =
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
    | 'left-top'
    | 'left-center'
    | 'left-bottom'
    | 'right-top'
    | 'right-center'
    | 'right-bottom';

export interface I_MenuPopoverProps extends Omit<PopoverProps, 'open'> {
    open: HTMLElement | null;
    arrow?: T_MenuPopoverArrowValue;
    hiddenArrow?: boolean;
}
