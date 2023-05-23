import { Navigate, useRoutes } from 'react-router-dom';


// import MainLayout from '../layouts/main/MainLayout';

import UserPage from '../pages/user';
import LoginPage from '../pages/login';
import ThreeJsPage from '../pages/threejs';

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
            element: <Navigate to={"/user/1"} replace />, index: true,
        },

        // Login
        {
            path: 'login',
            children: [
                { element: <Navigate to={"/login/default"} replace />, index: true },
                { path: ':api', element: <LoginPage /> },
            ]
        },

        {
            path: 'threejs',
            element: <ThreeJsPage />,
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
            path: 'user',
            // element: (
            //     <MainPage/>
            // ),
            children: [
                // { element: <Navigate to={"/main/dashboard"} replace />, index: true },
                { path: ':id', element: <UserPage /> },
                // { path: 'dashboard', element: <Dashboard /> },
                // { path: 'user', element: <UserPage /> },
                // { path: 'farmer', element: <FarmerPage /> },
                // { path: 'funding', element: <FundingPage /> },
                // {
                //   path: 'pig',
                //   children: [
                //     { element: <Navigate to="/main/pig/list" replace />, index: true },
                //     { path: 'list', element: <PigListPage /> },
                //     { path: ':id', element: <PigDetailsPage /> },
                //   ]
                // },
                // {
                //   path: 'farm',
                //   children: [
                //     { element: <Navigate to="/main/farm/list" replace />, index: true },
                //     { path: 'list', element: <FarmListPage /> },
                //     { path: ':id', element: <FarmDetailsPage /> },
                //   ]
                // },
            ]
        }
    ])
}