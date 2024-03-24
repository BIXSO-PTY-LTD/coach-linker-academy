import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import { Image, TextMaxLine } from '#shared/components';
import { IBlogPostProps } from '#shared/typescript/blog';
import { fDate } from '#shared/utils/format-time';
import PostTimeBlock from './home-time-block';

type Props = {
    post: IBlogPostProps;
    onSiderbar?: boolean;
};

export default function PostItemMobile({ post, onSiderbar }: Props) {
    return (
        <Stack spacing={2} direction="row" alignItems={{ xs: 'flex-start', md: 'unset' }} sx={{ width: 1 }}>
            <Image
                alt={post.title}
                src={post.coverUrl}
                sx={{
                    width: 80,
                    height: 80,
                    flexShrink: 0,
                    borderRadius: 1.5,
                }}
            />

            <Stack spacing={onSiderbar ? 0.5 : 1}>
                <Link color="inherit">
                    <TextMaxLine variant={onSiderbar ? 'subtitle2' : 'h6'}>{post.title}</TextMaxLine>
                </Link>

                <PostTimeBlock createdAt={fDate(post.createdAt)} duration={post.duration} />
            </Stack>
        </Stack>
    );
}
