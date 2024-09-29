import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Header, Protect } from "@/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Protect>
      <div className="header">
        <Header isloggedin={true} onclickLogin={() => {}} />
      </div>
      <Component {...pageProps} />
    </Protect>
  );
}
