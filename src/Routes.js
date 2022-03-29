import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"

import AuthedLayout from "./layouts/authed/AuthedLayout"
import HomePage from "./view/home/HomePage"
import LatestVideos from "./view/latestVideos/LatestVideos.jsx"
import TrendingVideos from "./view/trendingVideos/TrendingVideos"
import TopVideos from "./view/topVideos/TopVideos"
import Profile from "./view/profile/Profile"
import Store from "./view/menus/store/Store";
import Videos from "./view/menus/videos/Videos.jsx"
import Members from "./view/menus/members/Members"
import Audio from "./view/menus/audio/Audio"


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>

                <AuthedRoute exact path="/"
                    component={HomePage}/>

                <AuthedRoute path="/latestvideos"
                    component={LatestVideos}/>

                <AuthedRoute path="/trendingvideos"
                    component={TrendingVideos}/>

                <AuthedRoute path="/topvideos"
                    component={TopVideos}/>

                <AuthedRoute path="/profile"
                    component={Profile}/>

                <AuthedRoute path="/store"
                    component={Store}/>

                <AuthedRoute path="/videos"
                    component={Videos}/>

                <AuthedRoute path="/members"
                    component={Members}/>

                <AuthedRoute path="/audio"
                    component={Audio}/>

                <Redirect to="/"/>

            </Switch>
        </BrowserRouter>
    );
};

export default Routes;

const AuthedRoute = ({
    component: Component,
    ...props
}) => {
    return (
        <Route {...props}
            render={
                (props) => (
                    <AuthedLayout pathname={
                        props.location.pathname
                    }>
                        <Component {...props}/>
                    </AuthedLayout>
                )
            }/>
    );
};


// const AuthedAdminRoute = ({
//     component: Component,
//     ...props
// }) => {
//     return (
//         <Route {...props}
//             render={
//                 (props) => (
//                     <AuthedAdminLayout pathname={
//                         props.location.pathname
//                     }>
//                         <Component {...props}/>
//                     </AuthedAdminLayout>
//                 )
//             }/>
//     );
// };
