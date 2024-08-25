import Footer from "@/components/footer";
import Header from "@/components/header";
import Selection from "@/pages/components/arquiveSelection";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  return (
    <>
      {" "}
      <div className="h-screen w-full flex flex-col items-center justify-between ">
        <Header />
        <div> <Selection /> 
        <div className="mt-[30px]">
        <p className="text-[18px]">Ao adicionar o arquivo, você concorda com nossos <span className="text-primary underline">Termos de Serviço</span> e <span className="text-primary underline">Política de Privacidade.</span></p>
       </div>
     </div>

        <Footer />{" "}
      </div>
    </>
  );
}
