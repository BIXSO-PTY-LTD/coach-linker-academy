import { Breakpoint, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

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
