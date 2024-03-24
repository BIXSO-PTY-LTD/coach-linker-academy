import Stack from '@mui/material/Stack';
import { memo } from 'react';

import { T_NavGroupProps, T_NavProps } from '#shared/typescript';
import { NavList } from './nav-list';

const Group = ({ items, slotProps }: T_NavGroupProps) => {
    return (
        <>
            {items.map((list) => (
                <NavList key={list.title} data={list} depth={1} slotProps={slotProps} />
            ))}
        </>
    );
};

const NavSectionHorizontalRoot = ({ data, slotProps, sx, ...other }: T_NavProps) => {
    return (
        <Stack
            component="nav"
            id="nav-section-horizontal"
            direction="row"
            alignItems="center"
            spacing={`${slotProps?.gap || 6}px`}
            sx={{
                mx: 'auto',
                ...sx,
            }}
            {...other}
        >
            {data.map((group, index) => (
                <Group key={group.subheader || index} items={group.items} slotProps={slotProps} />
            ))}
        </Stack>
    );
};

export const NavSectionHorizontal = memo(NavSectionHorizontalRoot);
