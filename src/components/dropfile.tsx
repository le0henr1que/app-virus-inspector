import { Button } from "./ui/button";


export default function Upload() {
  return (
    <>
    <div>
        <img src="/dowload.svg" alt="download.icon" className="inline-block"/>
        <p className="mt-[10px] text-[18px] ">Adicione o arquivo ou arraste e solte-o nesta área</p>
        <p className="text-[12px] text-custom-gray">Permitido arquivos ZIP, PDF, DOC, PNG E SVG de até 250 MB</p>
        <Button variant="default" className="text-[16px] mt-[15px] font-bold">BUSCAR ARQUIVO</Button>
        </div>

       
    
    

    </>
  );
}

