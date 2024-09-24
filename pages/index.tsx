import Image from "next/image";
import { Inter } from "next/font/google";
import axios from "axios";
import { FormEvent, useState } from "react";
import { AnyNaptrRecord } from "dns";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [testing, settesting] = useState([]);
  const test = async () => {
    // let data = await fetch("/api/hello");
    // let posts = await data.json();
    // console.log({ posts });
    axios
      .post("/api/hello")
      .then(({ data }) => {
        console.log("val is => ", data);
        const { users = [] } = data;
        settesting(
          users.map(({ name, age }: any) => (
            <tr>
              <td>{name}</td>
              <td>{age}</td>
            </tr>
          ))
        );
      })
      .catch((error) => {
        console.log("error is => ", error);
      });
  };

  return (
    <div>
      <button onClick={test}>testing</button>
      <div></div>
    </div>
  );
}
