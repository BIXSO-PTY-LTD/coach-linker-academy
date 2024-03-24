import { LinkProps } from '@mui/material/Link';
import { TypographyProps } from '@mui/material/Typography';
import { Variant } from '@mui/material/styles/createTypography';

type T_IProps = TypographyProps & LinkProps;

export interface I_TextMaxLineProps extends T_IProps {
    line?: number;
    asLink?: boolean;
    persistent?: boolean;
    children: React.ReactNode;
    variant?: Variant;
}
