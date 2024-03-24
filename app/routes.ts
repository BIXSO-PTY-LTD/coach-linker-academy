const ROOTS = {
    AUTH: '/auth',
    MANAGEMENT: {
        COACH: '/management/coach',
        STUDENT: '/management/student',
    },
};

export const PATHS = {
    MINIMAL_UI: 'https://mui.com/store/items/minimal-dashboard/',
    AUTH: {
        LOGIN: `${ROOTS.AUTH}/login`,
        REGISTER: `${ROOTS.AUTH}/register`,
        FORGOT_PASSWORD: `${ROOTS.AUTH}/forgot-password`,
    },
    MANAGEMENT: {
        COACH: {
            PROFILE: `${ROOTS.MANAGEMENT.COACH}/profile`,
            STATISTIC: `${ROOTS.MANAGEMENT.COACH}/statistic`,
            STUDENTS: `${ROOTS.MANAGEMENT.COACH}/students`,
            SCHEDULER: `${ROOTS.MANAGEMENT.COACH}/scheduler`,
            COURSES: `${ROOTS.MANAGEMENT.COACH}/courses`,
            SETTINGS: `${ROOTS.MANAGEMENT.COACH}/settings`,
        },
    },
};
