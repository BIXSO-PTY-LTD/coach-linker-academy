'use client';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { m } from 'framer-motion';

import { Image, RouterLink } from '#shared/components';
import { MotionContainer, varBounce } from '#shared/components/animate';
import { useTranslations } from '#shared/hooks';
import { CompactLayout } from '#shared/layouts';

const NotFoundPage = () => {
    const translate = useTranslations();

    return (
        <CompactLayout>
            <MotionContainer>
                <m.div variants={varBounce().in}>
                    <Typography variant="h3" paragraph>
                        {translate('not-found.title')}
                    </Typography>
                </m.div>

                <m.div variants={varBounce().in}>
                    <Typography sx={{ color: 'text.secondary' }}>{translate('not-found.message')}</Typography>
                </m.div>

                <m.div variants={varBounce().in}>
                    <Image
                        disabledEffect
                        alt="404"
                        src="/assets/images/illustrations/illustration_404.svg"
                        sx={{
                            mx: 'auto',
                            maxWidth: 320,
                            my: { xs: 5, sm: 8 },
                        }}
                    />
                </m.div>

                <Button component={RouterLink} href="/" size="large" color="inherit" variant="contained">
                    {translate('not-found.btnBack')}
                </Button>
            </MotionContainer>
        </CompactLayout>
    );
};

export default NotFoundPage;
