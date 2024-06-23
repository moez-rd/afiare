import type { Metadata } from "next";
import "@/app/_ui/globals.css";
import { config } from "@/app/_lib/config";
import { poppins } from "@/app/_ui/fonts";
import Header from "@/app/_ui/layouts/header";
import { cn } from "@/app/_lib/utils";
import Footer from "@/app/_ui/layouts/footer";

export const metadata: Metadata = {
  title: config.metadata.title,
  description: config.metadata.description,
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang={config.metadata.lang}>
      <body
        className={cn(poppins.className, "flex min-h-dvh flex-col bg-white")}
      >
        <Header />
        <main className="mb-40 grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
