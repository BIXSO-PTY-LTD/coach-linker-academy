import { MainLayout } from '#shared/layouts';

type Props = {
    children: React.ReactNode;
};

export default function Layout({ children }: Props) {
    return <MainLayout disabledSpacing>{children}</MainLayout>;
}
