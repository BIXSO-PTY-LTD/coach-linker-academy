const ROOTS = {
    AUTH: '/auth',
    DASHBOARD: '/dashboard',
};

export const PATHS = {
    MINIMAL_UI: 'https://mui.com/store/items/minimal-dashboard/',
    AUTH: {
        LOGIN: `${ROOTS.AUTH}/login`,
        REGISTER: `${ROOTS.AUTH}/register`,
        FORGOT_PASSWORD: `${ROOTS.AUTH}/forgot-password`,
    },
    DASHBOARD: {
        ROOT: ROOTS.DASHBOARD,
        STATISTICAL: `${ROOTS.DASHBOARD}/statistical`,
        STUDENTS: `${ROOTS.DASHBOARD}/studens`,
        SCHEDULER: `${ROOTS.DASHBOARD}/schudler`,
        COURSES: `${ROOTS.DASHBOARD}/courses`,
        SETTINGS: `${ROOTS.DASHBOARD}/settings`,
    },
};
