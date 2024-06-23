import type { Metadata } from "next";
import "@/app/_ui/globals.css";
import { config } from "./_lib/config";
import { poppins } from "./_ui/fonts";

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
      <body className={poppins.className}>
        <main className="mb-40">{children}</main>
      </body>
    </html>
  );
}
