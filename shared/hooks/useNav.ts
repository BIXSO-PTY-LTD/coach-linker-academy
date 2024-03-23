import { useMemo } from 'react';

import { PATHS } from '#app/routes';

import { useTranslations } from '#shared/hooks';
// import SvgColor from '#shared/components/svg-color/svg-color';

// ----------------------------------------------------------------------

// const icon: any = (name: string) => (
//     <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
//     // OR
//     // <Iconify icon="fluent:mail-24-filled" />
//     // https://icon-sets.iconify.design/solar/
//     // https://www.streamlinehq.com/icons
//   );

// const ICONS = {
//     dashboard: icon('ic_dashboard'),
//     settings: icon('ic_user'),
//     scheduler: icon('ic_job'),
//     students: icon('ic_job'),
//     courses: icon('ic_job'),
// };

// ----------------------------------------------------------------------

export const useNav = () => {
    const t = useTranslations();

    const data = useMemo(
        () => [
            // OVERVIEW
            // ----------------------------------------------------------------------
            {
                subheader: t('overview'),
                items: [
                    {
                        title: t('dashboard'),
                        path: PATHS.DASHBOARD,
                    },
                ],
            },

            // MANAGEMENT
            // ----------------------------------------------------------------------
            {
                subheader: t('management'),
                items: [
                    // USER
                    {
                        title: t('students'),
                        path: PATHS.DASHBOARD.STUDENTS,
                        // icon: ICONS.students,
                    },

                    // PRODUCT
                    {
                        title: t('schdulers'),
                        path: PATHS.DASHBOARD.SCHEDULER,
                        // icon: ICONS.scheduler,
                    },

                    // ORDER
                    {
                        title: t('courses'),
                        path: PATHS.DASHBOARD.COURSES,
                        // icon: ICONS.courses,
                        children: [],
                    },

                    // INVOICE
                    {
                        title: t('settings'),
                        path: PATHS.DASHBOARD.SETTINGS,
                        // icon: ICONS.settings,
                        children: [],
                    },
                ],
            },
        ],
        [t],
    );

    return data;
};
