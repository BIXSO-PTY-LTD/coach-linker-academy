type T_EaseType =
    | 'linear'
    | 'easeIn'
    | 'easeOut'
    | 'easeInOut'
    | 'circIn'
    | 'circOut'
    | 'circInOut'
    | 'backIn'
    | 'backOut'
    | 'backInOut'
    | 'anticipate'
    | number[];

export type T_VariantsType = {
    distance?: number;
    durationIn?: number;
    durationOut?: number;
    easeIn?: T_EaseType;
    easeOut?: T_EaseType;
};

export type T_TranHoverType = {
    duration?: number;
    ease?: T_EaseType;
};

export type T_TranEnterType = {
    durationIn?: number;
    easeIn?: T_EaseType;
};

export type T_TranExitType = {
    durationOut?: number;
    easeOut?: T_EaseType;
};

export type T_BackgroundType = {
    colors?: string[];
    duration?: number;
    ease?: T_EaseType;
};
