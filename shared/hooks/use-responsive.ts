import { Breakpoint, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

type T_Query = 'up' | 'down' | 'between' | 'only';

type T_Value = Breakpoint | number;

export const useResponsive = (query: T_Query, start?: T_Value, end?: T_Value): boolean => {
    const theme = useTheme();

    const mediaUp = useMediaQuery(theme.breakpoints.up(start as T_Value));

    const mediaDown = useMediaQuery(theme.breakpoints.down(start as T_Value));

    const mediaBetween = useMediaQuery(theme.breakpoints.between(start as T_Value, end as T_Value));

    const mediaOnly = useMediaQuery(theme.breakpoints.only(start as Breakpoint));

    if (query === 'up') {
        return mediaUp;
    }

    if (query === 'down') {
        return mediaDown;
    }

    if (query === 'between') {
        return mediaBetween;
    }

    return mediaOnly;
};
