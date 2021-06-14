import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

import { authenticatedUser } from "../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";

import AuthForm from "../components/AuthForm/AuthForm.component"

const PrivateRoute = ({ component: Component, ...props }) => {

    const dispatch = useDispatch();
    const verifyAuthenticatedUser = () => dispatch(authenticatedUser());

    const authenticated = useSelector((state) => state.auth.authenticated);
    const loading = useSelector((state) => state.auth.loading);

    console.log(authenticated);
    console.log(loading)
    useEffect(() => {
         verifyAuthenticatedUser();
        //eslint-disable-next-line
    }, []
    );
    
    return (
        <Route
            {...props} render={props => !authenticated && !loading ? (<AuthForm />) : (
                <Component{...props} />)
            }
        />
    );
}

export default PrivateRoute;