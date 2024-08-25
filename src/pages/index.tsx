import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { useEffect } from "react";
import UrlAnalysis from "./components/url-analysis";

export default function Home() {
  return (
    <>
      {" "}
      <div className="h-screen w-full flex flex-col items-center justify-between ">
        <Header />
        <div>
          {" "}
          <UrlAnalysis />
        </div>
        <Footer />{" "}
      </div>
    </>
  );
}
