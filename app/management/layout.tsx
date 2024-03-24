'use client';
import { DashboardLayout } from '#shared/layouts';
import { I_Children } from '#shared/typescript';

const ManagementLayout = ({ children }: I_Children) => {
    return <DashboardLayout>{children}</DashboardLayout>;
};

export default ManagementLayout;
