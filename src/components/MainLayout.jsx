import React from "react";
import { Siderbar } from "./Sidebar";
import { Header } from "./Header";
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
    return (
        <>
            <section className="d-flex">
                <div className="sider-container">
                    <Siderbar />
                </div>
                <div className="component-dashboard-container">
                    <Header />
                    <div className="main-layout-container">
                        <Outlet />
                    </div>
                </div>
            </section>
           
        </>
    )
}