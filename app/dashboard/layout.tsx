'use client'
import React, { useState } from 'react';
import { SideNav } from './_components/SideNav';
import Header from './_components/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import { UserSubscriptionContext } from '../(context)/UserSubscriptionContext';
import { UpdateCuContext } from '../(context)/UpdateCuContext';

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const [totalUsage, setTotalUsage] = useState<Number>(0);
    const [usTotalUsage, setUSTotalUsage] = useState<boolean>(false);
    const [updateCusage, setUpCusage] = useState<any>();
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    return (
        <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
            <UserSubscriptionContext.Provider value={{ usTotalUsage, setUSTotalUsage }}>
                <UpdateCuContext.Provider value={{ updateCusage, setUpCusage }}>
                    <div className='bg-slate-100 flex'>

                        {/*  Menu Button */}
                        <div className='md:hidden p-4 '>
                            <button
                                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                className='text-black focus:outline-none'
                            >
                                {/*  Icon */}
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            </button>
                        </div>

                        {isSidebarOpen && (
                            <div
                                className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
                                onClick={() => setIsSidebarOpen(false)}
                            ></div>
                        )}

                        {/* Sidebar */}
                        <div className={`fixed inset-y-0 left-0 bg-white w-64 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 md:translate-x-0 md:z-50 md:fixed`}>
                            <SideNav />
                        </div>

                        {/* Content */}
                        <div className='flex-1 md:ml-64'>
                            <Header />
                            {children}
                        </div>
                    </div>
                </UpdateCuContext.Provider>
            </UserSubscriptionContext.Provider>
        </TotalUsageContext.Provider>
    )
}

export default Layout;
