import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

import { authenticatedUser } from "../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...props }) => {

    const dispatch = useDispatch();
    const verifyAuthenticatedUser = () => dispatch(authenticatedUser());

    const authenticated = useSelector((state) => state.auth.authenticated);
    const loading = useSelector((state) => state.auth.loading);


    useEffect(() => {
         verifyAuthenticatedUser();
        //eslint-disable-next-line
    }, []
    );

    console.log("A"+authenticated)
    console.log("L"+loading)
    return (
        <Route
            {...props} render={props => !authenticated && !loading ? (<Redirect to="/" />) : (
                <Component{...props} />)
            }
        />
    );
}

export default PrivateRoute;