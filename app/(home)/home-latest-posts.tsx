import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useResponsive } from '#shared/hooks';
import { RouterLink } from '#shared/components';
import { PATHS } from '../routes';
import Iconify from '#shared/components/iconify';
import { IBlogPostProps } from '#shared/typescript/blog';
import HomePostItem from './home-post-item';
import PostItemMobile from './home-item-mobile';

// ----------------------------------------------------------------------

type Props = {
    posts: IBlogPostProps[];
};

export default function HomeLatestPosts({ posts }: Props) {
    const mdUp = useResponsive('up', 'md');

    const viewAllBtn = (
        <Button
            component={RouterLink}
            href={PATHS.ROOT}
            color="inherit"
            endIcon={<Iconify icon="carbon:chevron-right" />}
        >
            View All
        </Button>
    );

    return (
        <Container
            sx={{
                py: { xs: 10, md: 15 },
            }}
        >
            <Stack
                direction="row"
                alignItems="center"
                justifyContent={{ xs: 'center', md: 'space-between' }}
                sx={{
                    mb: { xs: 8, md: 10 },
                }}
            >
                <Typography variant="h3">Latest Posts</Typography>

                {mdUp && viewAllBtn}
            </Stack>

            <Box
                sx={{
                    display: 'grid',
                    gap: { xs: 3, md: 4 },
                    gridTemplateColumns: {
                        xs: 'repeat(1, 1fr)',
                        md: 'repeat(3, 1fr)',
                    },
                }}
            >
                {posts
                    .slice(0, 3)
                    .map((post) =>
                        mdUp ? (
                            <HomePostItem key={post.id} post={post} />
                        ) : (
                            <PostItemMobile key={post.id} post={post} />
                        ),
                    )}
            </Box>

            {!mdUp && (
                <Stack alignItems="center" sx={{ mt: 8 }}>
                    {viewAllBtn}
                </Stack>
            )}
        </Container>
    );
}
