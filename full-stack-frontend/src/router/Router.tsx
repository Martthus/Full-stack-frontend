import * as React from "react";
import { Route, Switch } from "react-router-dom";
import ErrorPage from "../screens/errorPage/ErrorPage";
import { AllMusics } from "../screens/music/allMusics/AllMusics";
import { CreateMusic } from "../screens/music/createMusic/CreateMusic";
import MusicById from "../screens/music/musicById/MusicById";
import Login from "../screens/user/login/Login";
import Signup from "../screens/user/signup/Signup";

const Router = (): any => {
    return (
        <Switch>
            <Route exact path="/">
                <AllMusics />
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
            <Route exact path={"/music/create"}>
                <CreateMusic />
            </Route>
            <Route exact path={"/music/searchMusic"}>
            </Route>
            <Route exact path={"/music/:music_id"}>
                <MusicById />
            </Route>
            <Route>
                <ErrorPage />
            </Route>
        </Switch>
    );
};

export default Router;
