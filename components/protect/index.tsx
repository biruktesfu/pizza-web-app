import { Login } from "@/components";
import { useState } from "react";
import jwt from "jsonwebtoken";
import axios from "axios";

export const Protect = ({ children }: any) => {
  const [isloggedin, setisloggedin] = useState(false);

  const onSubmit = (event: any) => {
    event.preventDefault();
    const { email: tempEmail, password: tempPassword } = event.target;
    const email = tempEmail.value;
    const password = tempPassword.value;

    axios
      .post("/api/customers", {
        email,
        password,
        request_type: "login",
      })
      .then((val) => {
        console.log({ val });
      })
      .catch((error) => {
        console.log("whoops login");
      });
  };
  if (true) {
    return <Login onSubmit={onSubmit} />;
  } else {
    return <>{children}</>;
  }
};
