import { ReactPlayerProps } from 'react-player';

import { StyledReactPlayer } from './styles';

export * from './player-dialog';

// https://github.com/CookPete/react-player

export const Player = ({ ...other }: ReactPlayerProps) => {
    return <StyledReactPlayer {...other} />;
};
