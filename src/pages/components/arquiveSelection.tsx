import Upload from "@/components/dropfile";
import Dropzone from "@/components/dropzone";
import { Button } from "@/components/ui/button";


export default function Selection() {
  return (
    <>
    <div className="text-white text-center font-bold">
      <p className="text-[28px] font-bold leading-[1.2] font-bold leading-[120%]">ESSE <span className="text-primary">ARQUIVO</span> É SEGURO?</p>
      <p className="text-white font-chakra-petch text-[18px] font-normal leading-relaxed text-custom-gray">Verifique se há malwares e vírus no seu arquivo.</p>
    </div>
    <div className="text-center mt-[40px]">
        <div><Dropzone/></div>
        <div className="mt-[25px]">
          <p>
            Ao adicionar o arquivo, você concorda com nossos <span className="text-primary underline">Termos de Serviço</span> e <span className="text-primary underline">Política de Privacidade</span>
          </p>
        </div>

        
    </div>
    
    

    </>
  );
}
