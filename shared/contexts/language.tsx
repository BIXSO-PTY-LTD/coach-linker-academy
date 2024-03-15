import { createContext, useEffect, useState } from 'react';

import { useLocalStorage } from '#shared/hooks';
import { E_LanguageCode, I_Children, I_LanguageContextType } from '#shared/typescript';

export const LanguageContext = createContext<I_LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: I_Children) => {
    const localLang = useLocalStorage<E_LanguageCode>('lang');
    const [selectedLanguage, setSelectedLanguage] = useState<E_LanguageCode>(E_LanguageCode.en);

    const handleSetSelectedLanguage = (code: E_LanguageCode) => {
        setSelectedLanguage(code);
        localLang.set(code);
    };

    useEffect(() => {
        if (localLang.value === null) {
            setSelectedLanguage(E_LanguageCode.en);
        } else {
            if (localLang.value) {
                setSelectedLanguage(localLang.value);
            }
        }
    }, [localLang.value]);

    return (
        <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage: handleSetSelectedLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
