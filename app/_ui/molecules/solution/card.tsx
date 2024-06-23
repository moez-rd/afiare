import Image from "next/image";
import Link from "next/link";

export default function SolutionCard() {
  return (
    <li className="overflow-hidden rounded-xl text-white">
      <Image
        src="/images/dummies/randomsekali.jpg"
        alt=""
        width={800}
        height={800}
        className="h-32 object-cover"
      />
      <div className="flex flex-col items-center bg-gradient-to-b from-teal-950 to-teal-800 px-6 py-8">
        <h3 className="text-center text-lg font-bold">Text-to-Speech</h3>
        <p className="mt-6 text-center text-sm">
          Hasilkan suara voice-over manusia alami dari teks secara instan dalam
          Bahasa Indonesia
        </p>
        <Link
          href="#"
          className="mt-4 rounded bg-green-500 px-6 py-2.5 font-medium uppercase text-white"
        >
          Pelajari selengkapnya
        </Link>
      </div>
    </li>
  );
}
