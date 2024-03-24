import { Props } from 'simplebar-react';

import { SxProps, Theme } from '@mui/material/styles';

export interface I_ScrollbarProps extends Props {
    children?: React.ReactNode;
    sx?: SxProps<Theme>;
}
