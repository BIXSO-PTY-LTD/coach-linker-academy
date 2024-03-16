import { useCallback, useState } from 'react';

interface I_UseBooleanReturn {
    value: boolean;
    onTrue: () => void;
    onFalse: () => void;
    onToggle: () => void;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useBoolean = (defaultValue?: boolean): I_UseBooleanReturn => {
    const [value, setValue] = useState(!!defaultValue);

    const onTrue = useCallback(() => {
        setValue(true);
    }, []);

    const onFalse = useCallback(() => {
        setValue(false);
    }, []);

    const onToggle = useCallback(() => {
        setValue((prev) => !prev);
    }, []);

    return {
        value,
        onTrue,
        onFalse,
        onToggle,
        setValue,
    };
};
