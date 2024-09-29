import { Login } from "@/components";
import { Backdrop, CircularProgress } from "@mui/material";
import axios from "axios";
import { FC, useState } from "react";

export default function LoginPage() {
  const [open, setOpen] = useState(true);
  const [isloggedin, setisloggedin] = useState<null | boolean>(null);
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
        setOpen(false);
        localStorage.setItem("user", data.email);
        localStorage.setItem("token", "replace this with token");
        console.log({ data });
        setisloggedin(true);
      })
      .catch((error) => {
        setisloggedin(false);
        setOpen(false);
        console.log({ error });
      });
  };
  return (
    <div>
      <Backdrop
        open={open}
        sx={(theme) => ({
          color: "#fff",
          zIndex: theme.zIndex.drawer + 1,
        })}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Login onSubmit={onSubmit} />;
    </div>
  );
}
