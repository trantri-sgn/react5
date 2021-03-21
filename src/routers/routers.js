import NotFound from "../components/NotFound/NotFound";
import HomeLayOut from "../LayOut/HomeLayOut";
import Home from "../pages/Home/index";

const ROUTES = [
  {
    path: "/",
    component: HomeLayOut,
    routers: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      // {
      //   path: "/counter",
      //   component: Counter,
      //   exact: true,
      // },
      {
        component: NotFound,
      },
    ],
  },
];

export default ROUTES;
