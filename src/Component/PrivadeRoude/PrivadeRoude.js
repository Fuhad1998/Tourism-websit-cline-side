import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/UseAuth';

const PrivadeRoude = ({children, ...rest}) => {
    const {user} = useAuth();
    return (
        <Route
        {...rest}
        render={({location}) =>user.email ? children: <Redirect
        to={{
            pathname: "/login",
            state: {from: location}
        }}
        ></Redirect>} 
        >
            
        </Route>
    );
};

export default PrivadeRoude;