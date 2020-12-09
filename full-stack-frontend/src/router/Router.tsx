import * as React from "react";
import { Route, Switch } from "react-router-dom";
import ErrorPage from "../screens/errorPage/ErrorPage";
import { AllMusics } from "../screens/music/allMusics/AllMusics";
import Login from "../screens/user/login/Login";
import Signup from "../screens/user/signup/Signup";

const Router = (): any => {
    return (
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route exact path={"/login"}>
                <Login />
            </Route>
            <Route exact path={"/signup"}>
                <Signup />
            </Route>
            <Route exact path={"/music/all"}>
                <AllMusics />
            </Route>
            <Route exact path={"music/searchMusic"}>
                <ErrorPage />
            </Route>
            <Route>
                <ErrorPage />
            </Route>
        </Switch>
    );
};

export default Router;
