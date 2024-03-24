export type T_AuthUserType = null | Record<string, any>;

export type T_JWTContextType = {
    user: T_AuthUserType;
    method: string;
    loading: boolean;
    authenticated: boolean;
    unauthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string, firstName: string, lastName: string) => Promise<void>;
    logout: () => Promise<void>;
};
