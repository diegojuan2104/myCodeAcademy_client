import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading/Loading.component";

import { authenticatedUser } from "../../redux/actions/authActions";
import Header from "../Header/Header.component";

function Dashboard(props) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const verifyAuthenticatedUser = () => dispatch(authenticatedUser());

  //En caso de mensaje
  useEffect(() => {
    verifyAuthenticatedUser();
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Header />
          <h1>Dashboard</h1>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
