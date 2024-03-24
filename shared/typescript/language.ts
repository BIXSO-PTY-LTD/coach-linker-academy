import { Locale as DateFnsLocale } from 'date-fns';

import { LANGUAGE_LIST } from '#shared/i18n';

export enum E_LanguageCode {
    en = 'en',
    vi = 'vi',
}

export enum E_LanguageTimezone {
    en = 'Asia/Ho_Chi_Minh',
    vi = 'Asia/Ho_Chi_Minh',
}

export interface I_Language {
    label: string;
    value: E_LanguageCode;
    flag: string;
    systemValue: any;
    adapterLocale: DateFnsLocale;
    icon: string;
    numberFormat: {
        code: string;
        currency: string;
    };
}

export interface I_LanguageContextType {
    allLangs: typeof LANGUAGE_LIST;
    currentLang: I_Language;
    setCurrentLang: (newLang: I_Language) => void;
}
