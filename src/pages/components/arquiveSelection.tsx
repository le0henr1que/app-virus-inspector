import Upload from "@/components/dropfile";
import { Button } from "@/components/ui/button";


export default function Selection() {
  return (
    <>
    <div className="text-white text-center font-bold">
      <p className="text-[28px] font-bold leading-[1.2] font-bold leading-[120%]">ESSE <span className="text-primary">ARQUIVO</span> É SEGURO?</p>
      <p className="text-white font-chakra-petch text-[17px] font-normal leading-relaxed">Verifique se há malwares e vírus no seu arquivo.</p>
    </div>
    <div className="text-center mt-[40px]">
        <div><Upload/></div>

        
    </div>
    
    

    </>
  );
}
