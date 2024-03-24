import { useMemo } from 'react';

import { PATHS } from '#app/routes';
import { useTranslations } from '#shared/hooks';

export const useNav = () => {
    const t = useTranslations('management');

    const data = useMemo(
        () => [
            {
                subheader: t('title'),
                items: [
                    // STATISTIC
                    {
                        title: t('coach.statistic'),
                        path: PATHS.MANAGEMENT.COACH.STATISTIC,
                    },

                    // USER
                    {
                        title: t('coach.students'),
                        path: PATHS.MANAGEMENT.COACH.STUDENTS,
                    },

                    // PRODUCT
                    {
                        title: t('coach.scheduler'),
                        path: PATHS.MANAGEMENT.COACH.SCHEDULER,
                    },

                    // ORDER
                    {
                        title: t('coach.courses'),
                        path: PATHS.MANAGEMENT.COACH.COURSES,
                        children: [],
                    },

                    // INVOICE
                    {
                        title: t('coach.settings'),
                        path: PATHS.MANAGEMENT.COACH.SETTINGS,
                        children: [],
                    },
                ],
            },
        ],
        [t],
    );

    return data;
};
