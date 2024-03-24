import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';

import { Logo, SvgColor } from '#shared/components';
import { HEADER, NAV } from '#shared/constants';
import { useOffSetTop, useResponsive, useSettingsContext } from '#shared/hooks';
import { bgBlur } from '#shared/theme/css';
import { AccountPopover } from './account-popover';
// import ContactsPopover from '../common/contacts-popover';
// import LanguagePopover from '../common/language-popover';
// import NotificationsPopover from '../common/notifications-popover';
// import Searchbar from '../common/searchbar';
// import SettingsButton from '../common/settings-button';

type T_HeaderProps = {
    onOpenNav?: VoidFunction;
};

export const Header = ({ onOpenNav }: T_HeaderProps) => {
    const theme = useTheme();

    const settings = useSettingsContext();

    const isNavHorizontal = settings.themeLayout === 'horizontal';

    const isNavMini = settings.themeLayout === 'mini';

    const lgUp = useResponsive('up', 'lg');

    const offset = useOffSetTop(HEADER.H_DESKTOP);

    const offsetTop = offset && !isNavHorizontal;

    const renderContent = (
        <>
            {lgUp && isNavHorizontal && <Logo sx={{ mr: 2.5 }} />}

            {!lgUp && (
                <IconButton onClick={onOpenNav}>
                    <SvgColor src="/assets/icons/navbar/ic_menu_item.svg" />
                </IconButton>
            )}

            {/* <Searchbar /> */}

            <Stack
                flexGrow={1}
                direction="row"
                alignItems="center"
                justifyContent="flex-end"
                spacing={{ xs: 0.5, sm: 1 }}
            >
                {/* <LanguagePopover /> */}

                {/* <NotificationsPopover /> */}

                {/* <ContactsPopover /> */}

                {/* <SettingsButton /> */}

                <AccountPopover />
            </Stack>
        </>
    );

    return (
        <AppBar
            sx={{
                height: HEADER.H_MOBILE,
                zIndex: theme.zIndex.appBar + 1,
                ...bgBlur({
                    color: theme.palette.background.default,
                }),
                transition: theme.transitions.create(['height'], {
                    duration: theme.transitions.duration.shorter,
                }),
                ...(lgUp && {
                    width: `calc(100% - ${NAV.W_VERTICAL + 1}px)`,
                    height: HEADER.H_DESKTOP,
                    ...(offsetTop && {
                        height: HEADER.H_DESKTOP_OFFSET,
                    }),
                    ...(isNavHorizontal && {
                        width: 1,
                        bgcolor: 'background.default',
                        height: HEADER.H_DESKTOP_OFFSET,
                        borderBottom: `dashed 1px ${theme.palette.divider}`,
                    }),
                    ...(isNavMini && {
                        width: `calc(100% - ${NAV.W_MINI + 1}px)`,
                    }),
                }),
            }}
        >
            <Toolbar
                sx={{
                    height: 1,
                    px: { lg: 5 },
                }}
            >
                {renderContent}
            </Toolbar>
        </AppBar>
    );
};
