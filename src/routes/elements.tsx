import { Suspense, lazy, ElementType } from 'react';
// components
import LoadingScreen from '../components/loading-screen';

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------

// // AUTH
// export const LoginPage = Loadable(lazy(() => import('../pages/auth/LoginPage')));
// export const RegisterPage = Loadable(lazy(() => import('../pages/auth/RegisterPage')));
// export const VerifyCodePage = Loadable(lazy(() => import('../pages/auth/VerifyCodePage')));
// export const NewPasswordPage = Loadable(lazy(() => import('../pages/auth/NewPasswordPage')));
// export const ResetPasswordPage = Loadable(lazy(() => import('../pages/auth/ResetPasswordPage')));

// DASHBOARD: GENERAL
export const UserPage = Loadable(lazy(() => import('../pages/user')));

export const LoginPage = Loadable(lazy(() => import('../pages/login')));

export const ThreeJsPage = Loadable(lazy(() => import('../pages/threejs')));

// export const Dashboard = Loadable(lazy(() => import('../pages/main/Dashboard')));
// export const UserPage = Loadable(lazy(() => import('../pages/main/UserPage')));
// export const FarmerPage = Loadable(lazy(() => import('../pages/main/FarmerPage')));
// export const FundingPage = Loadable(lazy(() => import('../pages/main/FundingPage')));

// export const FarmListPage = Loadable(lazy(() => import('../pages/main/FarmListPage')));
// export const FarmDetailsPage = Loadable(lazy(() => import('../pages/main/FarmDetailsPage')));

// export const PigListPage = Loadable(lazy(() => import('../pages/main/PigListPage')));
// export const PigDetailsPage = Loadable(lazy(() => import('../pages/main/PigDetailsPage')));


// export const GeneralAppPage = Loadable(lazy(() => import('../pages/dashboard/GeneralAppPage')));
// export const GeneralEcommercePage = Loadable(
//   lazy(() => import('../pages/dashboard/GeneralEcommercePage'))
// );
// export const GeneralAnalyticsPage = Loadable(
//   lazy(() => import('../pages/dashboard/GeneralAnalyticsPage'))
// );
