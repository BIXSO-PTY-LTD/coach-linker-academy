import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { Carousel, SvgColor } from '#shared/components';
import { useCarousel } from '#shared/hooks';
import { IBrandProps } from '#shared/typescript/brand';

type T_HomeOurClientsProps = {
    brands: IBrandProps[];
};

export default function HomeOurClients({ brands }: T_HomeOurClientsProps) {
    const theme = useTheme();

    const carousel = useCarousel({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: theme.breakpoints.values.md,
                settings: { slidesToShow: 4 },
            },
            {
                breakpoint: theme.breakpoints.values.sm,
                settings: { slidesToShow: 2 },
            },
        ],
    });

    return (
        <Container
            sx={{
                pt: 10,
                pb: { xs: 5, md: 10 },
            }}
        >
            <Stack
                spacing={3}
                sx={{
                    textAlign: 'center',
                    mb: { xs: 8, md: 10 },
                }}
            >
                <Typography variant="h2">We Work With</Typography>

                <Typography sx={{ color: 'text.secondary' }}>
                    Quisque aliquet, libero consequat elementum convallis.
                </Typography>
            </Stack>

            <Carousel {...carousel.carouselSettings}>
                {brands.map((brand) => (
                    <SvgColor key={brand.id} src={brand.image} sx={{ width: 106, height: 32 }} />
                ))}
            </Carousel>
        </Container>
    );
}
