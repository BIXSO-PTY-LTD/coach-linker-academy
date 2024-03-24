'use client';
import HomeCategories from '#app/home/components/home-categories';
import HomeDownloadApp from '#app/home/components/home-download-app';
import HomeFeaturedCourses from '#app/home/components/home-featured-courses';
import HomeHero from '#app/home/components/home-hero';
import HomeIntroduce from '#app/home/components/home-introduce';
import HomeLatestPosts from '#app/home/components/home-latest-posts';
import HomeNewsletter from '#app/home/components/home-newsletter';
import HomeTeam from '#app/home/components/home-team';
import HomeTestimonial from '#app/home/components/home-testimonial';
import { _coursePosts, _courses, _coursesByCategories, _members, _testimonials } from '#shared/_mock';
import { MainLayout } from '#shared/layouts';

export const HomePage = () => {
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
};
