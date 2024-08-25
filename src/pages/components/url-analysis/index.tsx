import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function UrlAnalysis() {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center  ">
        <div className="text-[28px] font-bold">
          ESSE <span className="text-primary  "> SITE </span> É SEGURO?
        </div>
        <div className="text-[18px] text-[#D4D4D8]">
          Analise um URL que você deseja visitar para detectar malwares, sites
          falsos e ataques de phishing.
        </div>

        <div className=" flex w-full items-center justify-between gap-[24px] mt-[40px]">
          <Input
            type="text"
            placeholder="Insira a URL do site aqui"
            className="w-full py-[12px] px-[12px] border border-1 !border-[#A1A1AA]  border borde-radius-[2px]"
          />
          <Button className=" py-[0px] px-[40px]">ANALISAR SITE</Button>
        </div>
      </div>
    </>
  );
}
