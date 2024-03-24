import { styled } from '@mui/material/styles';
import ReactPlayer from 'react-player';

export const StyledReactPlayer = styled(ReactPlayer)({
    width: '100% !important',
    height: '100% !important',
    '& video': {
        objectFit: 'cover',
    },
});
