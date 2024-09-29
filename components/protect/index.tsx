import { Homepage, Login } from "@/components";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import axios from "axios";
import cryptojs from "crypto-js";
import { Backdrop, CircularProgress } from "@mui/material";
import { useRouter } from "next/router";

export const Protect = ({ children }: any) => {
  const router = useRouter();
  const [isloggedin, setisloggedin] = useState<null | boolean>(null);
  const [showLogin, setshowlogin] = useState(false);
  const [open, setOpen] = useState(false);

  const onSubmit = (event: any) => {
    event.preventDefault();
    setOpen(true);
    const hash_key = (process.env.NEXT_PUBLIC_HASH_KEY as string) || "";
    const { email: tempEmail, password: tempPassword } = event.target;
    const email = tempEmail.value;
    const password = tempPassword.value;

    axios
      .post("/api/customers", {
        email,
        password,
        request_type: "login",
      })
      .then(({ data }) => {
        if (data.restaurant_admin && data.restaurant_admin === true) {
          setOpen(false);
          localStorage.setItem("restaurant_admin", "true");
          localStorage.setItem("user", data.email);
          localStorage.setItem("token", "replace this with token");
          router.push("/admin/orders");
          setisloggedin(true);
        } else {
          setOpen(false);
          localStorage.setItem("user", data.email);
          localStorage.setItem("token", "replace this with token");
          setisloggedin(true);
          router.push("/");
        }
      })
      .catch((error) => {
        setisloggedin(false);
        setOpen(false);
        console.log({ error });
      });
  };
  useEffect(() => {
    if (localStorage) {
      if (localStorage.getItem("user") && localStorage.getItem("token")) {
        setisloggedin(true);
      } else {
        setisloggedin(false);
      }
    }
  }, []);

  if (isloggedin === null) {
    return <>loading...</>;
  } else if (isloggedin === false) {
    return showLogin ? (
      <>
        <Backdrop
          open={open}
          sx={(theme) => ({
            color: "#fff",
            zIndex: theme.zIndex.drawer + 1,
          })}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Login onSubmit={onSubmit} />
      </>
    ) : (
      <Homepage onClickLogin={() => setshowlogin(true)} />
    );
  } else {
    return <>{children}</>;
  }
};
