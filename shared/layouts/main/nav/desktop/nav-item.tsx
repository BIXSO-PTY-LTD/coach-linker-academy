import { forwardRef } from 'react';

import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';

import { NavItemProps, NavItemStateProps } from '../types';
import Iconify from '#shared/components/iconify';
import { RouterLink } from '#shared/components';

// ----------------------------------------------------------------------

const NavItem = forwardRef<HTMLDivElement, NavItemProps>(
    ({ title, path, open, active, subItem, hasChild, externalLink, ...other }, ref) => {
        const renderContent = (
            <StyledNavItem
                disableRipple
                disableTouchRipple
                ref={ref}
                open={open}
                active={active}
                subItem={subItem}
                {...other}
            >
                {title}

                {hasChild && <Iconify width={16} icon="carbon:chevron-down" sx={{ ml: 0.75 }} />}
            </StyledNavItem>
        );

        if (hasChild) {
            return renderContent;
        }

        if (externalLink) {
            return (
                <Link href={path} target="_blank" rel="noopener" color="inherit" underline="none">
                    {renderContent}
                </Link>
            );
        }

        return (
            <Link component={RouterLink} href={path} color="inherit" underline="none">
                {renderContent}
            </Link>
        );
    },
);
NavItem.displayName = 'NavItem';
export default NavItem;

// ----------------------------------------------------------------------

const StyledNavItem = styled(ListItemButton, {
    shouldForwardProp: (prop) => prop !== 'active' && prop !== 'subItem',
})<NavItemStateProps>(({ active, open, subItem, theme }) => {
    const opened = open && !active;

    const dotStyles = {
        content: '""',
        borderRadius: '50%',
        position: 'absolute',
        width: 6,
        height: 6,
        left: -12,
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        transition: theme.transitions.create(['opacity'], {
            duration: theme.transitions.duration.shortest,
        }),
    };

    return {
        // Root item
        ...(!subItem && {
            ...theme.typography.body1,
            padding: 0,
            fontSize: 15,
            minHeight: '100%',
            fontWeight: theme.typography.fontWeightMedium,
            fontFamily: theme.typography.fontSecondaryFamily,
            '&:hover': {
                backgroundColor: 'transparent',
                '&:before': {
                    ...dotStyles,
                    opacity: 0.64,
                },
            },
            ...(active && {
                fontWeight: theme.typography.fontWeightSemiBold,
                '&:before': dotStyles,
            }),
        }),

        // Sub item
        ...(subItem && {
            ...theme.typography.body2,
            padding: 0,
            fontSize: 13,
            color: theme.palette.text.secondary,
            '&:hover': {
                backgroundColor: 'transparent',
                color: theme.palette.text.primary,
            },
            ...(active && {
                color: theme.palette.text.primary,
                fontWeight: theme.typography.fontWeightSemiBold,
                '&:before': dotStyles,
            }),
        }),

        // Open
        ...(opened && {
            '&:before': {
                ...dotStyles,
                opacity: 0.64,
            },
        }),
    };
});
