import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';

import { Iconify } from '#shared/components';
import { NAV } from '#shared/constants';
import { useResponsive, useSettingsContextDashboard } from '#shared/hooks';
import { bgBlur } from '#shared/theme/css';

export const NavToggleButton = ({ sx, ...other }: IconButtonProps) => {
    const theme = useTheme();

    const settings = useSettingsContextDashboard();

    const lgUp = useResponsive('up', 'lg');

    if (!lgUp) {
        return null;
    }

    return (
        <IconButton
            size="small"
            onClick={() =>
                settings.onUpdate({
                    themeLayout: settings.themeLayout === 'vertical' ? 'mini' : 'vertical',
                })
            }
            sx={{
                p: 0.5,
                top: 32,
                position: 'fixed',
                left: NAV.W_VERTICAL - 12,
                zIndex: theme.zIndex.appBar + 1,
                border: `dashed 1px ${theme.palette.divider}`,
                ...bgBlur({ opacity: 0.48, color: theme.palette.background.default }),
                '&:hover': {
                    bgcolor: 'background.default',
                },
                ...sx,
            }}
            {...other}
        >
            <Iconify
                width={16}
                icon={settings.themeLayout === 'vertical' ? 'eva:arrow-ios-back-fill' : 'eva:arrow-ios-forward-fill'}
            />
        </IconButton>
    );
};