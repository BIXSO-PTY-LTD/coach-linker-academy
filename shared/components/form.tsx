import { FormProvider, UseFormReturn } from 'react-hook-form';

interface I_FormProps {
    children: React.ReactNode;
    methods: UseFormReturn<any>;
    onSubmit?: VoidFunction;
}

export const Form = ({ children, onSubmit, methods }: I_FormProps) => {
    return (
        <FormProvider {...methods}>
            <form onSubmit={onSubmit}>{children}</form>
        </FormProvider>
    );
};
