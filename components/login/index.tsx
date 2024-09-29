import { FC, useState } from "react";
import styles from "./index.module.css";
import {
  Backdrop,
  Button,
  FormGroup,
  FormLabel,
  TextField,
} from "@mui/material";
import { z } from "zod";
interface Iprops {
  onSubmit: (val: any) => void;
}

export const Login: FC<Iprops> = (props) => {
  const [formType, setFormtype] = useState<"login" | "signup">("login");
  const login = (
    <div className={styles.container}>
      <div className={styles.label}>Login</div>
      <form onSubmit={props.onSubmit} className={styles.form}>
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <TextField type="email" required name="email" />
        </FormGroup>
        <FormGroup>
          <FormLabel>Password</FormLabel>
          <TextField type="password" required name="password" />
        </FormGroup>
        <FormGroup>
          <Button type="submit" variant="contained">
            Login
          </Button>
        </FormGroup>
        <FormGroup>
          <span style={{ textAlign: "end" }}>
            <span
              style={{
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => setFormtype("signup")}
            >
              Sign up?
            </span>
          </span>
        </FormGroup>
      </form>
    </div>
  );

  const signup = (
    <div className={styles.container}>
      <div className={styles.label}>Sign Up</div>
      <form onSubmit={props.onSubmit} className={styles.form}>
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <TextField type="email" required name="email" />
        </FormGroup>
        <FormGroup>
          <FormLabel>Password</FormLabel>
          <TextField type="password" required name="password" />
        </FormGroup>
        <FormGroup>
          <FormLabel>Confirm Password</FormLabel>
          <TextField type="password" required name="confirm_password" />
        </FormGroup>
        <FormGroup>
          <FormLabel>Location</FormLabel>
          <TextField type="text" required name="location" />
        </FormGroup>
        <FormGroup>
          <FormLabel>Phone Number</FormLabel>
          <TextField type="text" required name="phone_number" />
        </FormGroup>
        <FormGroup>
          <Button type="submit" variant="contained">
            Login
          </Button>
        </FormGroup>
        <FormGroup>
          <span style={{ textAlign: "end" }}>
            <span
              style={{
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => setFormtype("login")}
            >
              Login?
            </span>
          </span>
        </FormGroup>
      </form>
    </div>
  );

  if (formType === "login") {
    return login;
  } else {
    return signup;
  }
};
