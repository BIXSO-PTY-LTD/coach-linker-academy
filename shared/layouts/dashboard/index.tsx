import Box from '@mui/material/Box';

import { useBoolean, useResponsive } from '#shared/hooks';
import NavBar from '#shared/components/common/navbar/navbar';
import Header from '#shared/components/common/header/header';
// import { useSettingsContext } from 'src/components/settings';

// import Main from './main';
// import NavMini from './nav-mini';

// ----------------------------------------------------------------------

type Props = {
    children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
    // const settings = useSettingsContext();

    const lgUp = useResponsive('up', 'lg');

    const nav = useBoolean();

    // const isMini = settings.themeLayout === 'mini';

    // const renderNavMini = <NavMini />;

    const renderNav = <NavBar openNav={nav.value} onCloseNav={nav.onFalse} />;

    // if (isMini) {
    //     return (
    //         <>
    //             <Header onOpenNav={nav.onTrue} />
    //             <Box
    //                 sx={{
    //                     minHeight: 1,
    //                     display: 'flex',
    //                     flexDirection: { xs: 'column', lg: 'row' },
    //                 }}
    //             >
    //                 {lgUp ? renderNavMini : renderNav}

    //                 {/* <Main>{children}</Main> */}
    //             </Box>
    //         </>
    //     );
    // }

    return (
        <>
            <Header onOpenNav={nav.onTrue} />
            <Box
                sx={{
                    minHeight: 1,
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                }}
            >
                {renderNav}
                {/* <Main>{children}</Main> */}
            </Box>
        </>
    );
}
