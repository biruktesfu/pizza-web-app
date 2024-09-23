import Image from "next/image";
import { Inter } from "next/font/google";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const test = async () => {
    // let data = await fetch("/api/hello");
    // let posts = await data.json();
    // console.log({ posts });
    axios
      .get("/api/hello")
      .then((val) => {
        console.log("val is => ", val);
      })
      .catch((error) => {
        console.log("error is => ", error);
      });
  };

  return (
    <div>
      <button onClick={() => test()}>testing</button>
    </div>
  );
}
