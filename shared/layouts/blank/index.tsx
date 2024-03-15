import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ReactNode, useRef, useState } from 'react';
import { ToastContainer } from 'react-toastify';

import { Bubble, Spinner } from '#shared/components';
import { withI18n } from '#shared/hocs';
import { useClickOutside, useLanguage, useLoading, useTranslations } from '#shared/hooks';
import { LANGUAGE_LIST } from '#shared/i18n';
import { E_LanguageCode } from '#shared/typescript';

const Layout = ({ children }: { children: ReactNode }) => {
    const { isLoading } = useLoading();
    const tTranslation = useTranslations('language');
    const { selectedLanguage, setSelectedLanguage } = useLanguage();
    const languageBubbleRef = useRef(null);

    const [bubbleOpen, setBubbleOpen] = useState(false);

    const handleChangeLanguage = (code: E_LanguageCode) => {
        setSelectedLanguage(code);
        setBubbleOpen(false);
    };

    useClickOutside(languageBubbleRef, () => setBubbleOpen(false));

    return (
        <>
            {isLoading && <Spinner full />}
            {children}
            <Bubble
                icon={LANGUAGE_LIST[selectedLanguage].flag}
                open={bubbleOpen}
                toggleOpen={() => setBubbleOpen(!bubbleOpen)}
            >
                <List ref={languageBubbleRef}>
                    {Object.values(LANGUAGE_LIST).map((lang, idx) => (
                        <ListItem key={idx} disablePadding>
                            <ListItemButton onClick={() => handleChangeLanguage(lang.code)}>
                                <ListItemIcon className="text-black">{lang.flag}</ListItemIcon>
                                <ListItemText primary={tTranslation(lang.code)} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Bubble>
            <ToastContainer />
        </>
    );
};

export const BlankLayout = withI18n(Layout);
