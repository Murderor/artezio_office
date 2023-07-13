import homePage from "./pages/homePage";
import {EMPLOYEES, EMPLOYEES_ROUT, HOME_ROUT, OFFICE_PLAN_ROUT} from "./utils/consts";
import employees from "./pages/Employees";
import OfficePlan from "./pages/OfficePlan";

export const publicRoutes =[
    {
        path:HOME_ROUT,
        Component:homePage
    },
    {
        path:EMPLOYEES_ROUT,
        Component:employees
    },
    {
        path:OFFICE_PLAN_ROUT,
        Component:OfficePlan
    }
]