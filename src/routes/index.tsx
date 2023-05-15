import { Navigate, useRoutes } from 'react-router-dom';


// import MainLayout from '../layouts/main/MainLayout';

import MainPage from '../pages/main';

// import {
//     LoginPage,

//     Dashboard,
//     UserPage,
//     FarmerPage,
//     FundingPage,

//     FarmListPage,
//     FarmDetailsPage,

//     PigListPage,
//     PigDetailsPage,

// } from './elements';

export default function Router() {
    return useRoutes([
        // Default
        {
            path: '/',
            element: <Navigate to={"/main"} replace />, index: true,
        },

        // // Auth
        // {
        //     path: 'auth',
        //     children: [
        //         {
        //             path: 'login',
        //             element: (
        //                 <LoginPage />
        //             ),
        //         },
        //     ],
        // },

        // Main
        {
            path: 'main',
            element: (
                <MainPage/>
            ),
            // children: [
            //     { element: <Navigate to={"/main/dashboard"} replace />, index: true },
            //     { path: 'dashboard', element: <Dashboard /> },
            //     { path: 'user', element: <UserPage /> },
            //     { path: 'farmer', element: <FarmerPage /> },
            //     { path: 'funding', element: <FundingPage /> },
            //     {
            //       path: 'pig',
            //       children: [
            //         { element: <Navigate to="/main/pig/list" replace />, index: true },
            //         { path: 'list', element: <PigListPage /> },
            //         { path: ':id', element: <PigDetailsPage /> },
            //       ]
            //     },
            //     {
            //       path: 'farm',
            //       children: [
            //         { element: <Navigate to="/main/farm/list" replace />, index: true },
            //         { path: 'list', element: <FarmListPage /> },
            //         { path: ':id', element: <FarmDetailsPage /> },
            //       ]
            //     },
            // ]
        }
    ])
}