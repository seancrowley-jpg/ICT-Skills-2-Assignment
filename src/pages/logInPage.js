import React from "react";
import LogIn from "../components/logIn";
import { AuthProvider } from "../contexts/authContext";

const LogInPage = (props) => {

  return (
      <AuthProvider >
                <LogIn />
      </AuthProvider>
  )
};

export default LogInPage;