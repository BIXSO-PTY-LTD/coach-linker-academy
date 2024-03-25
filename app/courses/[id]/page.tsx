// ----------------------------------------------------------------------

import { _courses } from '#shared/_mock';
import CourseView from '../components/course-view';

export const metadata = {
    title: 'Coach-Linker: Course',
};
type Props = {
    params: {
        id: string;
    };
};

export default function CoursePage({ params }: Props) {
    const { id } = params;
    const currentCourse = _courses.filter((course) => course.id === id)[0];
    return <CourseView currentCourse={currentCourse} />;
}
