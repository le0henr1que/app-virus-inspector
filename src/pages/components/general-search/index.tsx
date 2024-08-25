import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function GeneralSearch() {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center ">
        <div className="text-[28px] font-bold leading-[120%]">BUSCA GERAL</div>
        <div className="text-[18px] text-[#D4D4D8]">
          Pesquise um hash, domínio, endereço IP, URL..
        </div>

        <div className=" flex w-full items-center justify-between gap-[24px] mt-[40px]">
          <Input
            type="text"
            placeholder="Insira o endereço de IP, dominio ou Hash"
            className="w-full"
          />
          <Button className=" !py-[0px] !px-[40px]">ANALISAR</Button>
        </div>
      </div>
    </>
  );
}
