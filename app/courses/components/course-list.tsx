import Stack from '@mui/material/Stack';
import Pagination, { paginationClasses } from '@mui/material/Pagination';
import { ICourseProps } from '#shared/typescript/course';
import CourseItemSkeleton from './course-item-skeleton';
import HomeCourseItem from '#app/home/components/home-course-item';

// ----------------------------------------------------------------------

type Props = {
    courses: ICourseProps[];
    loading?: boolean;
};

export default function CourseList({ courses, loading }: Props) {
    return (
        <>
            <Stack spacing={4}>
                {(loading ? [...Array(9)] : courses).map((course, index) =>
                    course ? <HomeCourseItem key={course.id} course={course} /> : <CourseItemSkeleton key={index} />,
                )}
            </Stack>

            <Pagination
                count={10}
                color="primary"
                sx={{
                    my: 10,
                    [`& .${paginationClasses.ul}`]: {
                        justifyContent: 'center',
                    },
                }}
            />
        </>
    );
}
