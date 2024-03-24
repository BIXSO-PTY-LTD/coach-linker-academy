import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Slide from '@mui/material/Slide';
import { SxProps, Theme, alpha, styled } from '@mui/material/styles';

import { Iconify } from '#shared/components';
import { HEADER } from '#shared/constants';
import { useBoolean } from '#shared/hooks';

const StyledSearchbar = styled('div')(({ theme }) => ({
    top: 0,
    left: 0,
    zIndex: 99,
    width: '100%',
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    height: HEADER.H_MOBILE,
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
    padding: theme.spacing(0, 3),
    boxShadow: theme.customShadows.z8,
    backgroundColor: `${alpha(theme.palette.background.default, 0.72)}`,
    [theme.breakpoints.up('md')]: {
        height: HEADER.H_DESKTOP,
        padding: theme.spacing(0, 5),
    },
}));

type T_SearchbarProps = {
    sx?: SxProps<Theme>;
};

export const Searchbar = ({ sx }: T_SearchbarProps) => {
    const searchOpen = useBoolean();

    return (
        <ClickAwayListener onClickAway={searchOpen.onFalse}>
            <div>
                <IconButton color="inherit" aria-label="search" onClick={searchOpen.onTrue} sx={sx}>
                    <Iconify icon="carbon:search" />
                </IconButton>

                <Slide direction="down" in={searchOpen.value} mountOnEnter unmountOnExit>
                    <StyledSearchbar>
                        <Input
                            autoFocus
                            fullWidth
                            disableUnderline
                            placeholder="Search…"
                            startAdornment={
                                <InputAdornment position="start">
                                    <Iconify icon="carbon:search" sx={{ color: 'text.disabled' }} />
                                </InputAdornment>
                            }
                            sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
                        />
                        <Button variant="contained" onClick={searchOpen.onFalse}>
                            Search
                        </Button>
                    </StyledSearchbar>
                </Slide>
            </div>
        </ClickAwayListener>
    );
};
