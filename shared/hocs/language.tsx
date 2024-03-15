import { NextIntlClientProvider } from 'next-intl';
import type { FC } from 'react';

import { useLanguage } from '#shared/hooks';
import { MESSAGES } from '#shared/i18n';
import { E_LanguageTimezone, I_Children } from '#shared/typescript';

export const withI18n = (Component: FC<I_Children>) => {
    const PageWithI18n = (props: I_Children) => {
        const { selectedLanguage } = useLanguage();

        const messages = MESSAGES[selectedLanguage];

        return (
            <NextIntlClientProvider
                locale={selectedLanguage}
                messages={messages}
                timeZone={E_LanguageTimezone[selectedLanguage]}
            >
                <Component {...props} />
            </NextIntlClientProvider>
        );
    };

    return PageWithI18n;
};
