import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Iconify, RouterLink } from '#shared/components';
import { useResponsive } from '#shared/hooks';
import { PATHS } from '#app/routes';
import { ICourseProps } from '#shared/typescript/course';
import HomeCourseItem from '#app/home/components/home-course-item';

// ----------------------------------------------------------------------

type Props = {
    courses: ICourseProps[];
};

export default function CourseListSimilar({ courses }: Props) {
    const mdUp = useResponsive('up', 'md');

    const viewAllBtn = (
        <Button
            component={RouterLink}
            href={PATHS.COURSE.ROOT}
            color="inherit"
            endIcon={<Iconify icon="carbon:chevron-right" />}
        >
            View All
        </Button>
    );

    return (
        <Box
            sx={{
                bgcolor: 'background.neutral',
                py: { xs: 10, md: 15 },
            }}
        >
            <Container>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent={{ xs: 'center', md: 'space-between' }}
                    sx={{
                        mb: { xs: 8, md: 10 },
                    }}
                >
                    <Typography variant="h3">Similar Courses</Typography>

                    {mdUp && viewAllBtn}
                </Stack>

                <Box
                    sx={{
                        gap: 4,
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: 'repeat(1, 1fr)',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(3, 1fr)',
                        },
                    }}
                >
                    {courses.map((course) => (
                        <HomeCourseItem key={course.id} course={course} vertical />
                    ))}
                </Box>

                {!mdUp && (
                    <Stack alignItems="center" sx={{ mt: 8 }}>
                        {viewAllBtn}
                    </Stack>
                )}
            </Container>
        </Box>
    );
}
