import React from 'react';

const AuthContext = React.createContext({
  userId: null,
  username: null,
});

export default AuthContext;
