import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html className="dark">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body
          className={cn(
            "min-h-screen bg-[hsl(var(--background))] font-sans antialiased"
          )}
        >
          <Main />
          <NextScript />
          <Toaster />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
