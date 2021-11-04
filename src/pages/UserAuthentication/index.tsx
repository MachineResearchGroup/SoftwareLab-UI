import React from "react";
import { Route } from "react-router-dom";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

const UserAuthentication = () => {
    return (
        <section id="user_auth_container">
            <Route exact path="/sign_in" component={SignIn} />
            <Route exact path="/sign_up" component={SignUp} />
        </section>
    );
};

export default UserAuthentication;
