import HomePage from "../pages/home";
import SettingsPage from "../pages/settings";

const routes = [
    {
        name: "Home",
        path: "/",
        component: <HomePage/>
    },
    {
        name: "Settings",
        path: "/settings",
        component: <SettingsPage/>
    }
] 

export default routes;
