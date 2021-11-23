import React from 'react';
import { Navigate } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user,isLoading} = useAuth();
    if(isLoading){
        return(
          <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
        )
      }
    return user?.email? children : <Navigate to="/login"/>
};

export default PrivateRoute;