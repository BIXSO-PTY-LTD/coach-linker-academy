'use client';

import { useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { ICourseProps } from '#shared/typescript/course';
import { useBoolean, useResponsive } from '#shared/hooks';
import { _courses, _mock, _socials } from '#shared/_mock';
import ElearningCourseDetailsHero from './course-details-hero';
import CourseDetailsHero from './course-details-hero';
import CourseDetailsInfo from './course-details-info';
import CourseDetailsSummary from './course-details-summary';
import CourseDetailsTeachersInfo from './course-details-teachers-info';
import CourseListSimilar from './course-list-similar';
import { SplashScreen } from '#shared/components/loading-screen';
import { Iconify } from '#shared/components';
import Advertisement from '#shared/components/advertisement/advertisement';
import HomeNewsletter from '#app/home/components/home-newsletter';
import Review from '#shared/components/review/review';

// ----------------------------------------------------------------------

type Props = {
    currentCourse: ICourseProps;
};

export default function CourseView({ currentCourse }: Props) {
    const mdUp = useResponsive('up', 'md');

    const loading = useBoolean(true);
    const courseSimilar = _courses.slice(-3);

    useEffect(() => {
        const fakeLoading = async () => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            loading.onFalse();
        };
        fakeLoading();
    }, [loading]);

    if (loading.value) {
        return <SplashScreen />;
    }

    return (
        <>
            <CourseDetailsHero course={currentCourse} />

            <Container
                sx={{
                    overflow: 'hidden',
                    pt: { xs: 5, md: 10 },
                    pb: { xs: 15, md: 10 },
                }}
            >
                <Grid container spacing={{ xs: 5, md: 8 }}>
                    {!mdUp && (
                        <Grid xs={12}>
                            <CourseDetailsInfo course={currentCourse} />
                        </Grid>
                    )}

                    <Grid xs={12} md={7} lg={8}>
                        <CourseDetailsSummary course={currentCourse} />

                        <Stack direction="row" flexWrap="wrap" sx={{ mt: 5 }}>
                            <Typography variant="subtitle2" sx={{ mt: 0.75, mr: 1.5 }}>
                                Share:
                            </Typography>

                            <Stack direction="row" alignItems="center" flexWrap="wrap">
                                {_socials.map((social) => (
                                    <Button
                                        key={social.value}
                                        size="small"
                                        variant="outlined"
                                        startIcon={<Iconify icon={social.icon} />}
                                        sx={{
                                            m: 0.5,
                                            flexShrink: 0,
                                            color: social.color,
                                            borderColor: social.color,
                                            '&:hover': {
                                                borderColor: social.color,
                                                bgcolor: alpha(social.color, 0.08),
                                            },
                                        }}
                                    >
                                        {social.label}
                                    </Button>
                                ))}
                            </Stack>
                        </Stack>

                        <Divider sx={{ my: 5 }} />

                        <CourseDetailsTeachersInfo teachers={currentCourse.teachers} />
                    </Grid>

                    <Grid xs={12} md={5} lg={4}>
                        <Stack spacing={5}>
                            {mdUp && <CourseDetailsInfo course={currentCourse} />}

                            <Advertisement
                                advertisement={{
                                    title: 'Advertisement',
                                    description: 'Duis leo. Donec orci lectus, aliquam ut, faucibus non',
                                    imageUrl: _mock.image.course(7),
                                    path: '',
                                }}
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </Container>

            {mdUp && <Divider />}

            <Review />

            <CourseListSimilar courses={courseSimilar} />

            <HomeNewsletter />
        </>
    );
}
