import { AuthBackgroundLayout } from '#shared/layouts';
import { I_Children } from '#shared/typescript';

export default function Layout({ children }: I_Children) {
    return <AuthBackgroundLayout>{children}</AuthBackgroundLayout>;
}
