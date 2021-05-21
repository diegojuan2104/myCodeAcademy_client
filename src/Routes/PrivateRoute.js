import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

import { authenticatedUser } from "../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";

import Auth from "../components/Auth/Auth.component"

const PrivateRoute = ({ component: Component, ...props }) => {

    const dispatch = useDispatch();
    const verifyAuthenticatedUser = () => dispatch(authenticatedUser());

    const authenticated = useSelector((state) => state.auth.authenticated);
    const loading = useSelector((state) => state.auth.loading);

    console.log(authenticated);
    console.log("-----");
    console.log(loading)
    useEffect(() => {
         verifyAuthenticatedUser();
        //eslint-disable-next-line
    }, []
    );

    
    return (
        <Route
            {...props} render={props => !authenticated && !loading ? (<Auth />) : (
                <Component{...props} />)
            }
        />
    );
}

export default PrivateRoute;