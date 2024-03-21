import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import HeaderSimple from './common/header-simple';

type T_CompactLayoutProps = {
    children: React.ReactNode;
};

export const CompactLayout = ({ children }: T_CompactLayoutProps) => {
    return (
        <>
            <HeaderSimple />
            <Container component="main">
                <Stack
                    sx={{
                        py: 12,
                        m: 'auto',
                        maxWidth: 400,
                        minHeight: '100vh',
                        textAlign: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {children}
                </Stack>
            </Container>
        </>
    );
};
