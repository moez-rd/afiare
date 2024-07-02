import { config } from "@/app/_lib/config";
import { cn, tw } from "@/app/_lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 border-t-8 border-green-500 text-white">
      <div className="bg-stone-800 py-8">
        <div className="container flex flex-row gap-x-20">
          <div className="max-w-2xl">
            <div className="flex flex-row items-end gap-x-2 text-green-500">
              <Image src="/logo.png" alt="" width={60} height={60} />
            </div>
          </div>
          <div className="flex w-full flex-row justify-between">
            {config.footer_links.map((links) => (
              <div key={links.category} className="flex flex-col">
                <h5 className="text-lg font-bold">{links.category}</h5>
                <ul className="mt-4 flex flex-col gap-y-2">
                  {links.links.map((link, key) => (
                    <li key={key}>
                      {"name" in link && (
                        <Link href={link.href}>{link.name}</Link>
                      )}

                      {"icon" in link && (
                        <Link href={link.href}>
                          <link.icon
                            className="text-[1.2em] text-green-500"
                            weight="fill"
                          />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-stone-900 py-4">
        <div className="container flex flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Afiare. All rights reserved</p>
          <div className="flex flex-row items-center gap-x-1">
            <Link href="#">Syarat dan Ketentuan</Link>
            <span>|</span>
            <Link href="#">Kebijakan Privasi</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
