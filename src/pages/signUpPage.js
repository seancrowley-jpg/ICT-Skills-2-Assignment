import React from "react";
import SignUp from "../components/signUp";
import { AuthProvider } from "../contexts/authContext";

const SignUpPage = (props) => {

  return (
      <AuthProvider >
                <SignUp />
      </AuthProvider>
  )
};

export default SignUpPage;