import cn from 'classnames';
import { FaSpinner } from 'react-icons/fa';

export interface I_SpinnerProps {
    full?: boolean;
    className?: string;
}

export const Spinner = ({ full = false, className = '', ...rest }: I_SpinnerProps) => {
    function _renderSpinner() {
        return <FaSpinner className={cn('h-4 w-4 animate-spin', className)} {...rest} />;
    }

    if (full) {
        return (
            <div
                className={cn(
                    'h-full w-full z-50 bg-white bg-opacity-50 fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center',
                    className,
                )}
            >
                {_renderSpinner()}
            </div>
        );
    } else {
        return _renderSpinner();
    }
};
