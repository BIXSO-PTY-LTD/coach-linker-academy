'use client';
import { _brandsColor, _coursePosts, _courses, _coursesByCategories, _members, _testimonials } from '#shared/_mock';
import MainLayout from '#shared/layouts/main';
import HomeCategories from './(home)/home-categories';
import HomeDownloadApp from './(home)/home-download-app';
import HomeFeaturedCourses from './(home)/home-featured-courses';
import HomeHero from './(home)/home-hero';
import HomeIntroduce from './(home)/home-introduce';
import HomeLatestPosts from './(home)/home-latest-posts';
import HomeNewsletter from './(home)/home-newsletter';
import HomeOurClients from './(home)/home-our-clients';
import HomeTeam from './(home)/home-team';
import HomeTestimonial from './(home)/home-testimonial';

// ----------------------------------------------------------------------

export default function HomeView() {
    return (
        <MainLayout>
            <HomeHero />

            {/* <HomeOurClients brands={_brandsColor} /> */}

            <HomeIntroduce />

            <HomeFeaturedCourses courses={_courses} />

            <HomeCategories categories={_coursesByCategories} />

            <HomeTeam members={_members.slice(0, 4)} />

            <HomeTestimonial testimonials={_testimonials} />

            <HomeLatestPosts posts={_coursePosts.slice(0, 4)} />

            <HomeDownloadApp />

            <HomeNewsletter />
        </MainLayout>
    );
}
