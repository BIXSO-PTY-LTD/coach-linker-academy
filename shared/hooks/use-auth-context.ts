'use client';
import { createContext, useContext } from 'react';

import { T_JWTContextType } from '#shared/typescript';

export const AuthContext = createContext({} as T_JWTContextType);

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (!context) throw new Error('useAuthContext context must be use inside AuthProvider');

    return context;
};
