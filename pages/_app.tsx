import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Protect } from "@/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Protect>
      <Component {...pageProps} />
    </Protect>
  );
}
