import { Button } from "../ui/button";

export default function Header() {
  return (
    <div className="flex h-[77px] w-full items-center justify-between py-[20px] px-[96px] border-b ">
      <img src="/icon.svg" />
      <div className="flex gap-[32px]">
        {" "}
        <div>
          <Button variant="link">Sobre Nós</Button>
        </div>
        <div>
          <Button variant="link">Documentação</Button>
        </div>
      </div>
    </div>
  );
}
