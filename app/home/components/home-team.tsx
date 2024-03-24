import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { ITeamMemberProps } from '#shared/typescript/team';
import HomeTeamItem from './home-team-item';

type T_HomeTeamProps = {
    members: ITeamMemberProps[];
};

export default function HomeTeam({ members }: T_HomeTeamProps) {
    return (
        <Container
            sx={{
                py: { xs: 10, md: 15 },
            }}
        >
            <Stack spacing={3} sx={{ maxWidth: 480, mx: 'auto', textAlign: 'center' }}>
                <Typography variant="h2">Meet Our Teachers</Typography>

                <Typography sx={{ color: 'text.secondary' }}>
                    Since wire-frame renderings are relatively simple and fast to calculate, they are often used in
                    cases
                </Typography>
            </Stack>

            <Box
                sx={{
                    display: 'grid',
                    py: { xs: 8, md: 10 },
                    gap: { xs: 4, md: 3 },
                    gridTemplateColumns: {
                        xs: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(4, 1fr)',
                    },
                }}
            >
                {members.map((member) => (
                    <HomeTeamItem key={member.id} member={member} />
                ))}
            </Box>

            <Stack alignItems="center">
                <Button variant="outlined" size="large" color="inherit">
                    View All Teachers
                </Button>
            </Stack>
        </Container>
    );
}
