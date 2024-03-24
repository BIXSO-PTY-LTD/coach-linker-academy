import { createContext, useEffect, useState } from 'react';

import { useLocalStorage } from '#shared/hooks';
import { LANGUAGE_LIST } from '#shared/i18n';
import { I_Children, I_Language, I_LanguageContextType } from '#shared/typescript';

export const LanguageContext = createContext<I_LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: I_Children) => {
    const localLang = useLocalStorage<I_Language>('lang');
    const [currentLang, setCurrentLang] = useState<I_Language>(LANGUAGE_LIST[0]);

    const handleSetSelectedLanguage = (newLang: I_Language) => {
        setCurrentLang(newLang);
        localLang.set(newLang);
    };

    useEffect(() => {
        if (localLang.value === null) {
            setCurrentLang(LANGUAGE_LIST[0]);
        } else {
            if (localLang.value) {
                setCurrentLang(localLang.value);
            }
        }
    }, [localLang.value]);

    return (
        <LanguageContext.Provider
            value={{ allLangs: LANGUAGE_LIST, currentLang, setCurrentLang: handleSetSelectedLanguage }}
        >
            {children}
        </LanguageContext.Provider>
    );
};
