import { NextIntlClientProvider } from 'next-intl';
import type { FC } from 'react';

import { useLanguage } from '#shared/hooks';
import { MESSAGES } from '#shared/i18n';
import { E_LanguageTimezone, I_Children } from '#shared/typescript';

export const withI18n = (Component: FC<I_Children>) => {
    const PageWithI18n = (props: I_Children) => {
        const { currentLang } = useLanguage();

        const messages = MESSAGES[currentLang.value];

        return (
            <NextIntlClientProvider
                locale={currentLang.value}
                messages={messages}
                timeZone={E_LanguageTimezone[currentLang.value]}
            >
                <Component {...props} />
            </NextIntlClientProvider>
        );
    };

    return PageWithI18n;
};
