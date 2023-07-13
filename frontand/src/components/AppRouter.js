import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {publicRoutes} from "../routes";
import homePage from "../pages/homePage";
import HomePage from "../pages/homePage";
import {HOME_ROUT} from "../utils/consts";
const AppRouter = () => {
    return (
        <Switch>
            {publicRoutes.map(({path, Component})=>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={HOME_ROUT}/>
        </Switch>
    );
};

export default AppRouter;