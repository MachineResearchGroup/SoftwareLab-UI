import React from "react";
import { Route } from "react-router-dom";
import HomeHeader from "./components/HomeHeader";

import Home from "./pages/Home";
import UserAuthentication from "./pages/UserAuthentication";

const Routes: React.FC = () => {
    return (
        <>
            <Route exact path={["/sign_in", "/sign_up", "/"]} component={HomeHeader} />
            <div id="app_content">
                <Route exact path="/" component={Home} />
                <Route exact path={["/sign_in", "/sign_up"]} component={UserAuthentication} />
            </div>
        </>
    );
};

export default Routes;
