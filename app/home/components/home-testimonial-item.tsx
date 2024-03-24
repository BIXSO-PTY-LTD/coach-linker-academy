import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Iconify } from '#shared/components';
import { ITestimonialProps } from '#shared/typescript/testimonial';

type T_TestimonialItemContentProps = {
    testimonial: ITestimonialProps;
};

export function TestimonialItemContent({ testimonial }: T_TestimonialItemContentProps) {
    const { review } = testimonial;

    return (
        <Stack alignItems="center">
            <Iconify icon="carbon:quotes" sx={{ width: 48, height: 48, opacity: 0.48, color: 'primary.main' }} />

            <Typography
                sx={{
                    mt: 2,
                    mb: 5,
                    lineHeight: 1.75,
                    fontSize: { xs: 20, md: 24 },
                    fontFamily: (theme) => theme.typography.h1.fontFamily,
                }}
            >
                {review}
            </Typography>
        </Stack>
    );
}

type T_TestimonialItemThumbnailProps = {
    testimonial: ITestimonialProps;
    selected: boolean;
};

export function TestimonialItemThumbnail({ testimonial, selected }: T_TestimonialItemThumbnailProps) {
    return (
        <Stack
            sx={{
                width: 96,
                height: 96,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Avatar
                src={testimonial.avatarUrl}
                sx={{
                    width: 48,
                    height: 48,
                    opacity: 0.48,
                    cursor: 'pointer',
                    transition: (theme) => theme.transitions.create('all'),
                    ...(selected && {
                        opacity: 1,
                        transform: 'scale(2)',
                    }),
                }}
            />
        </Stack>
    );
}
