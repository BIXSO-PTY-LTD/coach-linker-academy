import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { useEffect } from 'react';
import rtlPlugin from 'stylis-plugin-rtl';

type T_RTLProps = {
    themeDirection: 'rtl' | 'ltr';
    children: React.ReactNode;
};

export default function RTL({ children, themeDirection }: T_RTLProps) {
    useEffect(() => {
        document.dir = themeDirection;
    }, [themeDirection]);

    const cacheRtl = createCache({
        key: 'rtl',
        prepend: true,
        // @ts-ignore
        // https://github.com/styled-components/stylis-plugin-rtl/issues/35
        stylisPlugins: [rtlPlugin],
    });

    if (themeDirection === 'rtl') {
        return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
    }

    return <>{children}</>;
}
