import { LayoutWrapper } from '#shared/layouts/layout-wrapper';
import { I_Children } from '#shared/typescript';

export const BlankLayout = ({ children }: I_Children) => {
    return <LayoutWrapper>{children}</LayoutWrapper>;
};
