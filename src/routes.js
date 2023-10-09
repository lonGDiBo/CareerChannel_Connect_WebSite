import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';

import LoginCandidatePage from './pages/auth/LoginCandidatePage';
// import RegisPage from './pages/RegisPage';v
// import UserPage from './pages/UserPage';
// ------- Routes for admin ---------------
import LoginAdminPage from './pages/auth/LoginAdminAuthPage';
import Page404 from './pages/dashboard/Page404';
import RecruimentPage from './pages/dashboard/RecruitmentPage';
import ManageAccount from './pages/dashboard/ManageAccount/ManageAccount';
import ManageAccountAdd from './pages/dashboard/ManageAccount/ManageAccountAdd';
import ManageDetail from './pages/dashboard/ManageAccount/ManageDetail';
import InterviewersPage from './pages/dashboard/InterviewerPage';
import Event from './pages/dashboard/EventPage/Event';
import EventDetail from './pages/dashboard/EventPage/EventDetail';
import EventAdd from './pages/dashboard/EventPage/EventAdd';
import EventEdit from './pages/dashboard/EventPage/EventEdit';
// import Home from './pages//Home';
import RecruitmentDetail from './pages/dashboard/Recruitments/RecruimentDetail';
import RecruitmentCreatePage from './pages/dashboard/Recruitments/RecruimentCreate';
import FindJob from './pages/candidate/FindJob';
import InterviewerDetail from './pages/dashboard/Interviewer/InterviewerDetail';
import DashboardAppPage from './pages/dashboard/DashboardAppPage';
import CandidateListPage from './pages/dashboard/CandidateListPage';
import CandidateDetail from './pages/dashboard/CandidateList/CandidateDetail';
import CandidateResult from './pages/dashboard/CandidateList/CandidateResult';
import CandidateSchedule from './pages/dashboard/CandidateList/CandidateSchedule';
// import { element } from 'prop-types';
import { storage } from './services/storage';

// ----------------------------------------------------------------------

export default function Router() {
  const token = storage.getCache('token');
  const loggedIn = Boolean(token);

  const routes = useRoutes([
    {
      path: '/dashboard',
      element: loggedIn ? <DashboardLayout /> : <Navigate to="/loginAdmin" replace />,
      children: [
        { path: 'app', element: <DashboardAppPage /> },
        { element: <Navigate to="/dashboard/recruitment" />, index: true },
        {
          path: 'recruitment',
          element: <RecruimentPage />,
          children: [
            {
              path: 'detail/:id',
              element: <RecruitmentDetail />,
            },
            {
              path: 'create',
              element: <RecruitmentCreatePage />,
            },
          ],
        },
        {
              path:'candidatelists',
              element:<CandidateListPage/>,
              children: [
                { path: 'detail/:id',element: <CandidateDetail />},
                { path: 'schedule/:id', element: <CandidateSchedule/>},
                { path: 'result/:id', element :<CandidateResult/>}
              ]
        },
        // { path: 'user', element: <UserPage /> },
        {
          path: 'interviewers',
          element: <InterviewersPage />,
          children: [{ path: 'detail/:id', element: <InterviewerDetail /> }],
        },
        {
          path: 'accounts',
          element: <ManageAccount />,
          children: [
            { path: 'add', element: <ManageAccountAdd /> },
            { path: 'detail/:id', element: <ManageDetail /> },
            
          ],
        },
        // { path: 'detail', element: <EventDetail /> },
        {
          path: 'event',
          element: <Event />,
          children: [
            { path: 'add', element: <EventAdd /> },
            { path: 'detail/:id', element: <EventDetail /> },
            { path: 'edit/:id', element: <EventEdit /> },
          ],
        },
      ],
    },

    {
      path: 'loginAdmin',
      element: loggedIn ? <Navigate to="/dashboard" replace /> : <LoginAdminPage />,
    },

    {
      path: 'loginCandidate',
      element :<LoginCandidatePage />
    },

    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '/candidate',
      element: <FindJob />,
    },

    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
    // {
    //   path: 'regis',
    //   element: <RegisPage />,
    // },
    // {
    //   path: 'home',
    //   element: <Home />,
    // },
  ]);

  return routes;
}
