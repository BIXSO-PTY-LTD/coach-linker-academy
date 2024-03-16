import { useContext } from 'react';

import { LoadingContext } from '#shared/contexts';
import { I_LoadingContext } from '#shared/typescript';

export const useLoading = (): I_LoadingContext => {
    const context = useContext(LoadingContext);

    if (!context) {
        throw new Error('useLoading must be used within a LoadingProvider');
    }

    return context;
};
