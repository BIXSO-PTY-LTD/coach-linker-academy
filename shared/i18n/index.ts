import { enUS as enUSCore, viVN as viVNCore } from '@mui/material/locale';
import { enUS as enUSDataGrid, viVN as viVNDataGrid } from '@mui/x-data-grid/locales';
import { enUS as enUSDate, viVN as viVNDate } from '@mui/x-date-pickers/locales';
import { enUS as enUSAdapter, vi as viVNAdapter } from 'date-fns/locale';
import merge from 'lodash/merge';
import { AbstractIntlMessages } from 'next-intl';

import messagesEn from '#shared/i18n/data/en.json';
import messagesVi from '#shared/i18n/data/vi.json';
import { E_LanguageCode, I_Language } from '#shared/typescript';

export const MESSAGES: Record<E_LanguageCode, AbstractIntlMessages> = {
    en: messagesEn,
    vi: messagesVi,
};

export const LANGUAGE_LIST: I_Language[] = [
    {
        label: 'English',
        value: E_LanguageCode.en,
        flag: '🇺🇸',
        systemValue: merge(enUSDate, enUSDataGrid, enUSCore),
        adapterLocale: enUSAdapter,
        icon: 'flagpack:gb-nir',
        numberFormat: {
            code: 'en-US',
            currency: 'USD',
        },
    },
    {
        label: 'Vietnamese',
        value: E_LanguageCode.vi,
        flag: '🇻🇳',
        systemValue: merge(viVNDate, viVNDataGrid, viVNCore),
        adapterLocale: viVNAdapter,
        icon: 'flagpack:vn',
        numberFormat: {
            code: 'vi-VN',
            currency: 'VND',
        },
    },
];
