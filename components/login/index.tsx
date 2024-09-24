import { FC } from "react";
import styles from "./index.module.css";
import { Button, FormGroup, FormLabel, TextField } from "@mui/material";
import { z } from "zod";
interface Iprops {
  onSubmit: (val: any) => void;
}

export const Login: FC<Iprops> = (props) => {
  const mySchema = z.string();

  return (
    <div className={styles.container}>
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
      </form>
    </div>
  );
};
