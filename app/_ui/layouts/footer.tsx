import { config } from "@/app/_lib/config";
import { cn, tw } from "@/app/_lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-6 text-white md:mt-10">
      <div className="bg-stone-800 py-8">
        <div className="container flex flex-col gap-x-20 md:flex-row">
          <div className="max-w-2xl">
            <div className="text-secondary-500 flex flex-row items-end gap-x-2">
              <Image src="/logo.png" alt="" width={60} height={60} />
            </div>
          </div>
          <div className="flex w-full flex-col gap-y-6 md:flex-row md:justify-between md:gap-y-0">
            {config.footer_links.map((links) => (
              <div key={links.category} className="flex flex-col">
                <h5 className="text-base font-bold md:text-lg">
                  {links.category}
                </h5>
                <ul className="mt-4 flex flex-col gap-y-2 text-sm md:text-base">
                  {links.links.map((link, key) => (
                    <li key={key}>
                      {"name" in link && (
                        <Link href={link.href}>{link.name}</Link>
                      )}

                      {"icon" in link && (
                        <Link href={link.href}>
                          <link.icon
                            className="text-secondary-500 text-[1.2em]"
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
        <div className="container flex flex-col items-center justify-between text-sm md:flex-row md:text-base">
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
