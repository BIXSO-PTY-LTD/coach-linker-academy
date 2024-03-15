export enum E_LanguageCode {
    en = 'en',
    vi = 'vi',
}

export enum E_LanguageTimezone {
    en = 'Asia/Ho_Chi_Minh',
    vi = 'Asia/Ho_Chi_Minh',
}

export interface I_Language {
    code: E_LanguageCode;
    flag: string;
}

export interface I_LanguageContextType {
    selectedLanguage: E_LanguageCode;
    setSelectedLanguage: (code: E_LanguageCode) => void;
}
