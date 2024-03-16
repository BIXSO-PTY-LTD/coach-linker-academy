import { useEffect, useState } from 'react';

export const useLocalStorage = <T>(
    key: string,
    defaultValue?: T,
): { value: T | null | undefined; set: (newValue: T) => void; remove: () => void } => {
    const [value, setValue] = useState<T | null | undefined>(defaultValue);

    const set = (newValue: T) => {
        localStorage.setItem(key, JSON.stringify(newValue));
        setValue(newValue);
    };

    const remove = () => {
        localStorage.removeItem(key);
        setValue(null);
    };

    useEffect(() => {
        const data = localStorage.getItem(key);
        setValue(data ? JSON.parse(data) : defaultValue ?? null);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { value, set, remove };
};
