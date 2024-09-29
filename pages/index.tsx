import Image from "next/image";
import { Inter } from "next/font/google";
import axios from "axios";
import { FormEvent, useState } from "react";
import { AnyNaptrRecord } from "dns";
import { HomePageBody } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <HomePageBody />
    </div>
  );
}
