import Image from "next/image";
import Link from "next/link";
import { Button } from "../../atoms/button";

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
        <Button className="mt-4">Pelajari selengkapnya</Button>
      </div>
    </li>
  );
}
