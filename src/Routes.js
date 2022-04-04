import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AuthedLayout from "./layouts/authed/AuthedLayout";

import HomePage from "./view/home/HomePage";
import LatestVideos from "./view/latestVideos/LatestVideos.jsx";
import TrendingVideos from "./view/trendingVideos/TrendingVideos";
import TopVideos from "./view/topVideos/TopVideos";

import Profile from "./view/profile/Profile";

import Store from "./view/menus/store/Store";
import Videos from "./view/menus/videos/Videos.jsx";
import Members from "./view/menus/members/Members";
import Audio from "./view/menus/audio/Audio";
import ArtistChannel from "./view/menus/artists/channel/Channel";
import ArtistVideos from "./view/menus/artists/videos/Videos";
import CategoryBlogs from "./view/menus/categories/blogs/CategoryBlogs";
import CategoryChannels from "./view/menus/categories/channels/CategoryChannels";
import CategoryVideos from "./view/menus/categories/videos/CategoryVideos";
import Channels from "./view/menus/channels/Channels";
import VideoHome from "./view/home/videohome/VideoHome";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthedRoute exact path="/" component={HomePage} />
        <AuthedRoute path="/latestvideos" component={LatestVideos} />
        <AuthedRoute path="/trendingvideos" component={TrendingVideos} />
        <AuthedRoute path="/topvideos" component={TopVideos} /> {/* PROFILE */}
        <AuthedRoute path="/profile" component={Profile} /> {/* MENUS */}
        <AuthedRoute path="/store" component={Store} />
        <AuthedRoute path="/videos" component={Videos} />
        <AuthedRoute path="/members" component={Members} />
        <AuthedRoute path="/audio" component={Audio} />
        <AuthedRoute path="/artist/channel" component={ArtistChannel} />
        <AuthedRoute path="/artist/videos" component={ArtistVideos} />
        <AuthedRoute path="/categories/blogs" component={CategoryBlogs} />
        <AuthedRoute path="/categories/channels" component={CategoryChannels} />
        <AuthedRoute path="/categories/videos" component={CategoryVideos} />
        <AuthedRoute path="/channels" component={Channels} />
        <AuthedRoute path="/videoHome" component={VideoHome} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

const AuthedRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={(props) => (
        <AuthedLayout pathname={props.location.pathname}>
          <Component {...props} />
        </AuthedLayout>
      )}
    />
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
