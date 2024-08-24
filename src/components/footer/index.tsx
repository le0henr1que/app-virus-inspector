import { Button } from "../ui/button";

export default function Footer() {
  return (
    <div className="flex h-[70px] w-full items-center justify-between py-[24px] px-[96px] border-t text-[16px ]">
      © 2024 VirusHunter. Todos os direitos reservados.
      <div className="flex gap-[32px] text-[16px]">
        {" "}
        <div>
          <Button variant="link_default">Termos de serviço</Button>
        </div>
        <div>
          <Button variant="link_default">Política de Privacidade</Button>
        </div>
        <div>
          <Button variant="link_default">Fale Conosco</Button>
        </div>
      </div>
    </div>
  );
}
