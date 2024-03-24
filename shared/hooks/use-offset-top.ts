import { useScroll } from 'framer-motion';
import { useCallback, useEffect, useMemo, useState } from 'react';

interface I_UseScrollOptions extends Omit<ScrollOptions, 'container' | 'target'> {
    container?: React.RefObject<HTMLElement>;
    target?: React.RefObject<HTMLElement>;
}

export const useOffSetTop = (top = 0, options?: I_UseScrollOptions): boolean => {
    const { scrollY } = useScroll(options);

    const [value, setValue] = useState(false);

    const onOffSetTop = useCallback(() => {
        scrollY.on('change', (scrollHeight) => {
            if (scrollHeight > top) {
                setValue(true);
            } else {
                setValue(false);
            }
        });
    }, [scrollY, top]);

    useEffect(() => {
        onOffSetTop();
    }, [onOffSetTop]);

    const memoizedValue = useMemo(() => value, [value]);

    return memoizedValue;
};

// Usage
// const offset = useOffSetTop(100);

// Or
// const offset = useOffSetTop(100, {
//   container: ref,
// });
