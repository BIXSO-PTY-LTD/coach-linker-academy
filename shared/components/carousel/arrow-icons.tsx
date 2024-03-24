import { Iconify } from '#shared/components';
import { IconifyProps } from '#shared/components/iconify/types';

type T_IconProps = {
    icon?: IconifyProps; // Right icon
    isRTL?: boolean;
};

export function LeftIcon({ icon = 'eva:arrow-ios-forward-fill', isRTL }: T_IconProps) {
    return (
        <Iconify
            icon={icon}
            sx={{
                transform: ' scaleX(-1)',
                ...(isRTL && {
                    transform: ' scaleX(1)',
                }),
            }}
        />
    );
}

export function RightIcon({ icon = 'eva:arrow-ios-forward-fill', isRTL }: T_IconProps) {
    return (
        <Iconify
            icon={icon}
            sx={{
                ...(isRTL && {
                    transform: ' scaleX(-1)',
                }),
            }}
        />
    );
}
