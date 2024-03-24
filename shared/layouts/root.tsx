import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useRef, useState } from 'react';
import { ToastContainer } from 'react-toastify';

import { Bubble, Loading } from '#shared/components';
import { LanguageProvider, LoadingProvider } from '#shared/contexts';
import { withI18n } from '#shared/hocs';
import { useClickOutside, useLanguage, useLoading, useTranslations } from '#shared/hooks';
import { LANGUAGE_LIST } from '#shared/i18n';
import { I_Children, I_Language } from '#shared/typescript';

export const LayoutWrapper = withI18n(({ children }: I_Children) => {
    const { isLoading } = useLoading();
    const translate = useTranslations();
    const { currentLang, setCurrentLang } = useLanguage();
    const languageBubbleRef = useRef(null);

    const [bubbleOpen, setBubbleOpen] = useState(false);

    const handleChangeLanguage = (newLang: I_Language) => {
        setCurrentLang(newLang);
        setBubbleOpen(false);
    };

    useClickOutside(languageBubbleRef, () => setBubbleOpen(false));

    return (
        <>
            {isLoading && <Loading full />}
            {children}
            <Bubble icon={currentLang.flag} open={bubbleOpen} toggleOpen={() => setBubbleOpen(!bubbleOpen)}>
                <List ref={languageBubbleRef}>
                    {LANGUAGE_LIST.map((lang, idx) => (
                        <ListItem key={idx} disablePadding>
                            <ListItemButton onClick={() => handleChangeLanguage(lang)}>
                                <ListItemIcon className="text-black">{lang.flag}</ListItemIcon>
                                <ListItemText primary={translate(`language.${lang.value}`)} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Bubble>
            <ToastContainer />
        </>
    );
});

export const RootLayout = ({ children }: I_Children) => (
    <LanguageProvider>
        <LoadingProvider>
            <LayoutWrapper>{children}</LayoutWrapper>
        </LoadingProvider>
    </LanguageProvider>
);
