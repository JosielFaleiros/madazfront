import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';

import { getTokensigIn } from '../store/modules/auth/authLocalStorage';

// Private router
export default function RouteWrapper({
  component: 
  Component,
  isPrivate,
  ...rest
}) {
  
  // const signed = useSelector(state => state.auth.signed)
  const validation = getTokensigIn();
  
    if (!validation && isPrivate) {
      return <Redirect to="/" />;
    }
    
    if (validation && !isPrivate) {
      return <Route
        {...rest}
        render={props => (
            <Component {...props} />
        )}
      />
    }


    return (
      <Route
        {...rest}
        render={props => (
            <Component {...props} />
        )}
      />
    ); 
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
