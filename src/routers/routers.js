import NotFound from "../components/NotFound/NotFound";
import HomeLayOut from "../LayOut/HomeLayOut";
import Home from "../pages/Home/index";
import Course from '../pages/Course/Course'
import CourseDetail from '../pages/Course/CourseDetail'
import Faq from "../pages/Faq/Faq";
import InforCoin from "../pages/InforCoin/InforCoin";
import Profile from "../pages/Profile/Profile";
import Project from "../pages/Project/Project";
import Register from "../pages/Register/Register";
import Team from "../pages/Team/Team";
import Payment from "../pages/Payment/Payment";
import Email from "../pages/Email/Email";

const ROUTES = [
  {
    path: "/email",
    component: Email,
  },
  {
    path: "/",
    component: HomeLayOut,
    routers: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/course",
        component: Course,
      },
      {
        path: "/course-detail/:slug",
        component: CourseDetail,
      },
      {
        path: "/faq",
        component: Faq,
      },
      {
        path: "/inforcoin",
        component: InforCoin,
      },
      {
        path: "/profile",
        component: Profile,
      },
      {
        path: "/project",
        component: Project,
      },
      {
        path: "/register",
        component: Register,
      },
      {
        path: "/team",
        component: Team,
      },
      {
        path: "/payment",
        component: Payment,
      },
      // {
      //   path: '/course/:slug',
      //   component: Course
      // },

      {
        component: NotFound,
      },
    ],
  },
];

export default ROUTES;
