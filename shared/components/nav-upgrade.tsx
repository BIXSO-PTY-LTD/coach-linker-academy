import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { PATHS } from '#app/routes';
import { Label } from '#shared/components';
import { useMockedUser } from '#shared/hooks/use-mocked-user';

export const NavUpgrade = () => {
    const { user } = useMockedUser();

    return (
        <Stack
            sx={{
                px: 2,
                py: 5,
                textAlign: 'center',
            }}
        >
            <Stack alignItems="center">
                <Box sx={{ position: 'relative' }}>
                    <Avatar alt={user?.displayName} sx={{ width: 48, height: 48 }}>
                        {user?.displayName?.charAt(0).toUpperCase()}
                    </Avatar>

                    <Label
                        color="success"
                        variant="filled"
                        sx={{
                            top: -6,
                            px: 0.5,
                            left: 40,
                            height: 20,
                            position: 'absolute',
                            borderBottomLeftRadius: 2,
                        }}
                    >
                        Free
                    </Label>
                </Box>

                <Stack spacing={0.5} sx={{ mb: 2, mt: 1.5, width: 1 }}>
                    <Typography variant="subtitle2" noWrap>
                        {user?.displayName}
                    </Typography>

                    <Typography variant="body2" noWrap sx={{ color: 'text.disabled' }}>
                        {user?.email}
                    </Typography>
                </Stack>

                <Button variant="contained" href={PATHS.MINIMAL_UI} target="_blank" rel="noopener">
                    Upgrade to Pro
                </Button>
            </Stack>
        </Stack>
    );
};
