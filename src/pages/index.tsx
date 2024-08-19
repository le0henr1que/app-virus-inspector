// import { Load } from "@/components/load";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  // const router = useRouter();

  // useEffect(() => {
  //   router.replace("/home");
  // }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-[hsl(var(--background))]">
      {/* <Load /> */}
      Virus <Button>Hunter</Button>
    </div>
  );
}
