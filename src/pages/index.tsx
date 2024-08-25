import Dropzone from "@/components/dropzone";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import One23Icon from "@/icons/123";
import WwwIcon from "@/icons/www";
import { cn } from "@/lib/utils";
import { FileIcon, Icon } from "lucide-react";
import { useState } from "react";
import UrlAnalysis from "./components/url-analysis";

enum ElementsEnum {
  ANALYZE_FILES = "ANALYZE_FILES",
  ANALYZE_URL = "ANALYZE_URL",
  GENERAL_SEARCH = "GENERAL_SEARCH",
}

//TODO: ADICIONEM OS COMPONENTES QUE VOCÊS ESTÃO DESENVOLVEDO AQUI, OND ESTÃO OS P'S, RESPECTIVAMENTE
const elements = {
  [ElementsEnum.ANALYZE_FILES]: <p>Analise de arquivos</p>,
  [ElementsEnum.ANALYZE_URL]: <UrlAnalysis />,
  [ElementsEnum.GENERAL_SEARCH]: <p>Busca geral</p>,
};

const button = {
  variant: {
    active:
      "!rounded-none w-[242px] !h-[102px] bg-primary hover:bg-primary flex flex-col gap-[16px] text-background !font-bold text-[16px] !p-[16px] hover:text-background !justify-start !items-start",
    normal:
      "border !border-white !rounded-none w-[242px] !text-white !h-[102px]  flex flex-col gap-[16px]  !font-bold text-[16px]  !justify-start !items-start !p-[16px]",
  },
};

export default function Home() {
  const [elementRender, setElementRender] = useState(
    ElementsEnum.ANALYZE_FILES
  );

  const elementActiveHender = (element: ElementsEnum) => {
    return element === elementRender
      ? button.variant.active
      : button.variant.normal;
  };
  return (
    <>
      {" "}
      <div className="h-screen w-full flex flex-col items-center justify-between ">
        <Header />
        <div>
          <div className="flex gap-[24px] ">
            <Button
              type="button"
              className={elementActiveHender(ElementsEnum.ANALYZE_FILES)}
              variant="outline"
              onClick={() => setElementRender(ElementsEnum.ANALYZE_FILES)}
            >
              <FileIcon
                color={
                  elementRender === ElementsEnum.ANALYZE_FILES
                    ? cn("hsl(var(--background))")
                    : "#FFFFFF"
                }
                size={32}
              />
              ANÁLISE DE ARQUIVO
            </Button>
            <Button
              type="button"
              className={elementActiveHender(ElementsEnum.ANALYZE_URL)}
              variant="outline"
              onClick={() => setElementRender(ElementsEnum.ANALYZE_URL)}
            >
              <WwwIcon
                color={
                  elementRender === ElementsEnum.ANALYZE_URL
                    ? cn("hsl(var(--background))")
                    : "#FFFFFF"
                }
                size={32}
              />
              ANÁLISE DE URL (SITE)
            </Button>
            <Button
              type="button"
              className={elementActiveHender(ElementsEnum.GENERAL_SEARCH)}
              variant="outline"
              onClick={() => setElementRender(ElementsEnum.GENERAL_SEARCH)}
            >
              <One23Icon
                color={
                  elementRender === ElementsEnum.GENERAL_SEARCH
                    ? cn("hsl(var(--background))")
                    : "#FFFFFF"
                }
                size={32}
              />
              BUSCA GERAL
            </Button>
          </div>
          <div className="mt-[40px] w-full items-center flex flex-col">
            {elements[elementRender]}
          </div>
        </div>
        <Footer />{" "}
      </div>
    </>
  );
}
