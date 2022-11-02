import React, { useEffect } from "react";

import LoginForm from "../components/User/LoginForm/LoginForm";
import RegisterForm from "../components/User/RegisterForm/RegisterForm";

const UserAuthPage = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="p-5">
      <LoginForm />
      <RegisterForm />
    </div>
  );
};

export default UserAuthPage;
