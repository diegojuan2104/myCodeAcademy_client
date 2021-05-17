import React from 'react'
import { useDispatch, useSelector, useEffect } from 'react-redux';

function Dashboard(props) {
    const dispatch = useDispatch();

    const loading = useSelector((state) => state.auth.loading);
    const authenticated = useSelector((state) => state.auth.authenticated);
    const error = useSelector((state) => state.auth.error);
  
    //En caso de mensaje
    useEffect(() => {
      console.log('====================================');
      console.log(authenticated);
      console.log('====================================');
      if (authenticated) {
        props.history.push("/dashboard");
      }
    //eslint-disable-next-line
    }, [authenticated]);

    return (
        
        <div>
             <h1>This is the dashboard</h1>
        </div>
    )
}

export default Dashboard
