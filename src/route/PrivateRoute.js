import React from "react";
import { Navigate } from "react-router-dom";

// 새끼 컴포넌트를 children이라고 함
const PrivateRoute = ({ user, children }) => {
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
