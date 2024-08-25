import { Button } from "./ui/button";


export default function Upload() {
  return (
    <>
    <div className=" border border-primary border-[1px] p-[24px] border-dashed ]">
        <img src="/dowload.svg" alt="download.icon" className="inline-block  mt-[10px]"/>
        <p className="mt-[10px] text-[18px]">Adicione o arquivo ou arraste e solte-o nesta área</p>
        <p className="text-[12px]">Permitido arquivos ZIP, PDF, DOC, PNG E SVG de até 250 MB</p>
        <Button variant="default" className="text-[16px] mt-[15px] font-semibold">BUSCAR ARQUIVO</Button>
       </div>
    
    

    </>
  );
}

