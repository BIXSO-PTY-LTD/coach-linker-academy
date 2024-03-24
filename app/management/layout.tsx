'use client';
import { DashboardLayout } from '#shared/layouts';
import { I_Children } from '#shared/typescript';

export default function AuthLayout({ children }: I_Children) {
    return <DashboardLayout>{children}</DashboardLayout>;
}
