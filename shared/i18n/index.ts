import { AbstractIntlMessages } from 'next-intl';

import messagesEn from '#shared/i18n/data/en.json';
import messagesVi from '#shared/i18n/data/vi.json';
import { E_LanguageCode, I_Language } from '#shared/typescript';

export const MESSAGES: Record<E_LanguageCode, AbstractIntlMessages> = {
    en: messagesEn,
    vi: messagesVi,
};

export const LANGUAGE_LIST: Record<E_LanguageCode, I_Language> = {
    en: {
        code: E_LanguageCode.en,
        flag: '🇺🇸',
    },
    vi: {
        code: E_LanguageCode.vi,
        flag: '🇻🇳',
    },
};
