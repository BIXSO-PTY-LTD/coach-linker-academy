import { ListItemButtonProps } from '@mui/material/ListItemButton';
import { StackProps } from '@mui/material/Stack';
import { SxProps, Theme } from '@mui/material/styles';

export type T_SlotProps = {
    gap?: number;
    rootItem?: SxProps<Theme>;
    subItem?: SxProps<Theme>;
    subheader?: SxProps<Theme>;
    currentRole?: string;
};

export type T_NavItemStateProps = {
    depth?: number;
    open?: boolean;
    active?: boolean;
    hasChild?: boolean;
    currentRole?: string;
    externalLink?: boolean;
};

export type T_NavItemBaseProps = {
    title: string;
    path: string;
    icon?: React.ReactElement;
    info?: React.ReactElement;
    caption?: string;
    disabled?: boolean;
    roles?: string[];
    children?: any;
};

export type T_NavItemProps = ListItemButtonProps &
    T_NavItemStateProps &
    T_NavItemBaseProps & {
        slotProps?: T_SlotProps;
    };

export type T_NavListProps = {
    data: T_NavItemBaseProps;
    depth: number;
    slotProps?: T_SlotProps;
};

export type T_NavSubListProps = {
    data: T_NavItemBaseProps[];
    depth: number;
    slotProps?: T_SlotProps;
};

export type T_NavGroupProps = {
    subheader?: string;
    items: T_NavItemBaseProps[];
    slotProps?: T_SlotProps;
};

export type T_NavProps = StackProps & {
    data: {
        subheader: string;
        items: T_NavItemBaseProps[];
    }[];
    slotProps?: T_SlotProps;
};
