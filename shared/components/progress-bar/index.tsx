'use client';

import NProgress from 'nprogress';
import { useEffect } from 'react';

import StyledProgressBar from './styles';

type T_PushStateInput = [data: any, unused: string, url?: string | URL | null | undefined];

export const ProgressBar = () => {
    useEffect(() => {
        NProgress.configure({ showSpinner: false });

        const handleAnchorClick = (event: MouseEvent) => {
            const targetUrl = (event.currentTarget as HTMLAnchorElement).href;
            const currentUrl = window.location.href;
            if (targetUrl !== currentUrl) {
                NProgress.start();
            }
        };

        const handleMutation = () => {
            const anchorElements: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('a[href]');

            const filteredAnchors = Array.from(anchorElements).filter((element) => {
                const href = element.getAttribute('href');
                return href && href.startsWith('/');
            });

            filteredAnchors.forEach((anchor) => anchor.addEventListener('click', handleAnchorClick));
        };

        const mutationObserver = new MutationObserver(handleMutation);

        mutationObserver.observe(document, { childList: true, subtree: true });

        window.history.pushState = new Proxy(window.history.pushState, {
            apply: (target, thisArg, argArray: T_PushStateInput) => {
                NProgress.done();
                return target.apply(thisArg, argArray);
            },
        });
    });

    return <StyledProgressBar />;
};
