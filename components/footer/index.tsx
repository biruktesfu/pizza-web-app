import { FC } from "react";
import styles from "./index.module.css";
import Link from "next/link";
import {
  FacebookOutlined,
  LinkOutlined,
  LocalPizzaOutlined,
  MessageOutlined,
  SendOutlined,
  Twitter,
  YoutubeSearchedForOutlined,
} from "@mui/icons-material";
import { Button } from "@mui/material";

type Iprops = {
  onclickLogin: () => void;
};

export const Footer: FC<Iprops> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <div className={styles.navigation}>
          <Link href={"/"}>Home</Link>
          <Link href={"/orders"} onClick={props.onclickLogin}>
            Order
          </Link>
          <Link href={"/about"}>About Us</Link>
        </div>
        <div className={styles.feedback}>
          <div className={styles.label}>Pizza</div>
          <div className={styles.searchbar}>
            <input className={styles.textInput} placeholder="Search" />
            <Button variant="text" className={styles.button}>
              <SendOutlined />
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.lower}>
        <div className={styles.websiteinfo}>
          <span>@2024 Pizza All rights Reserved.</span>
          <span>Terms and Conditions</span>
        </div>
        <div className={styles.links}>
          <a href="">
            <FacebookOutlined />
          </a>
          <a href="">
            <LinkOutlined />
          </a>
          <a href="">
            <Twitter />
          </a>
          <a href="">
            <YoutubeSearchedForOutlined />
          </a>
        </div>
      </div>
    </div>
  );
};
