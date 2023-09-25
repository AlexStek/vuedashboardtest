import Home from "../pages/Home.vue";
import GetStarted from "../pages/GetStarted.vue";
import Notifications from "../pages/Notifications.vue";
import Training from "../pages/Training.vue";
import Achievements from "../pages/Achievements.vue";
import Logout from "../pages/Logout.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: Home
  },
  {
    name: "getStarted",
    path: "/getstarted",
    component: GetStarted
  },
  {
    name: "notifications",
    path: "/notifications",
    component: Notifications
  },
  {
    name: "training",
    path: "/training",
    component: Training
  },
  {
    name: "achievements",
    path: "/achievements",
    component: Achievements
  },
  {
    name: "logout",
    path: "/logout",
    component: Logout
  }
];

export default routes;
