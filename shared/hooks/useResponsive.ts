import { Breakpoint, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

type T_ReturnType = boolean;

type T_Query = 'up' | 'down' | 'between' | 'only';

type T_Value = Breakpoint | number;

export function useResponsive(query: T_Query, start?: T_Value, end?: T_Value): T_ReturnType {
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
}

type T_BreakpointOrNull = Breakpoint | null;

export function useWidth() {
    const theme = useTheme();

    const keys = [...theme.breakpoints.keys].reverse();

    return (
        keys.reduce((output: T_BreakpointOrNull, key: Breakpoint) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const matches = useMediaQuery(theme.breakpoints.up(key));

            return !output && matches ? key : output;
        }, null) || 'xs'
    );
}
