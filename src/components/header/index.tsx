import { Button } from "../ui/button";

export default function Header() {
  return (
    <div className="flex h-[77px] w-full items-center justify-between py-[20px] px-[96px] border-b">
      <img src="/icon.svg" />
      <div className="flex gap-[32px] text-[16px]">
        {" "}
        <div>
          <Button variant="link_default">Sobre Nós</Button>
        </div>
        <div>
          <Button variant="link_default">Documentação</Button>
        </div>
      </div>
    </div>
  );
}
