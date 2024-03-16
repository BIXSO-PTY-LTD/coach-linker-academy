import { Controller, useFormContext } from 'react-hook-form';

import TextFieldRaw, { TextFieldProps as TextFieldPropsRaw } from '@mui/material/TextField';

type T_TextFieldProps = TextFieldPropsRaw & {
    name: string;
};

export const TextField = ({ name, helperText, type, ...other }: T_TextFieldProps) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <TextFieldRaw
                    {...field}
                    fullWidth
                    type={type}
                    value={type === 'number' && field.value === 0 ? '' : field.value}
                    onChange={(event) => {
                        if (type === 'number') {
                            field.onChange(Number(event.target.value));
                        } else {
                            field.onChange(event.target.value);
                        }
                    }}
                    error={!!error}
                    helperText={error ? error?.message : helperText}
                    {...other}
                />
            )}
        />
    );
};
