"use client";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Footer, Header, Protect } from "@/components";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const { pathname, push } = useRouter();
  const newpathname = pathname.split("/")[1];
  useEffect(() => {
    if (localStorage) {
      if (localStorage.getItem("restaurant_admin") === "true") {
        if (newpathname !== "admin") {
          push("/admin");
        }
      } else {
        if (newpathname === "admin") {
          push("/");
        }
      }
    }
  }, []);

  return (
    <Protect>
      <div className="header">
        <Header isloggedin={true} onclickLogin={() => {}} />
      </div>
      <Component {...pageProps} />

      {newpathname && newpathname !== "admin" && (
        <div>
          <Footer onclickLogin={() => {}} />
        </div>
      )}
    </Protect>
  );
}
