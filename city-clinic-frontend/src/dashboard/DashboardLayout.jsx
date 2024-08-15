// src/dashboard/DashboardLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className="dashboard-layout">
            <nav>
                <ul>
                    <li><a href="/dashboard/users">User Management</a></li>
                    <li><a href="/dashboard/appointments">Appointment Management</a></li>
                    <li><a href="/dashboard/medical-history">Medical History</a></li>
                </ul>
            </nav>
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
