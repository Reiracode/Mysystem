import React from "react";
// import { Route, Redirect } from "react-router-dom";
import { Route, Navigate, Outlet } from "react-router-dom";
import { useAuthState } from "./Context";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // const barearToken = localStorage.getItem("token");
  const userDetails = useAuthState();
  // console.log(userDetails.IsLogin);
  // console.log({ ...rest });
  return userDetails.IsLogin ? <Outlet /> : <Navigate to="/login" />
};

export default PrivateRoute;
