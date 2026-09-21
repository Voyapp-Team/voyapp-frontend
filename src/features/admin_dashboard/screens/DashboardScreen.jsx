"use client";

import { DashboardCard } from '../components/DashboardCards';
import { UsersTable } from '../components/UsersTable';
import { usersDetails } from '../data/dashboardData';

export const DashboardScreen = () => {
  return (
    <div>
      <DashboardCard data={usersDetails} />
      <div className="mt-5 w-full">
        <UsersTable />
      </div>
    </div>
  );
};
