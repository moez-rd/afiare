import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-green-500 text-white">
      <div className="bg-stone-800 py-8">
        <div className="container flex flex-row gap-x-10">
          <div>
            <div className="flex flex-row items-end gap-x-2 text-green-500">
              <Image src="/logo.svg" alt="" width={60} height={60} />
              <p className="flex flex-row gap-x-1 text-lg font-bold md:text-base">
                Afiare
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4">
            <ul className="flex flex-col">
              <li>
                <h5 className="text-lg font-bold">Industri</h5>
              </li>
            </ul>
            <ul className="flex flex-col">
              <li>
                <h5 className="text-lg font-bold">Perusahaan</h5>
              </li>
            </ul>
            <ul className="flex flex-col">
              <li>
                <h5 className="text-lg font-bold">Komunitas</h5>
              </li>
            </ul>
            <ul className="flex flex-col">
              <li>
                <h5 className="text-lg font-bold">Ikuti Kami</h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-stone-950 py-4">
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
