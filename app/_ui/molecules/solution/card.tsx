import Image from "next/image";
import Link from "next/link";

export default function SolutionCard() {
  return (
    <li className="text-white rounded-xl overflow-hidden">
      <Image
        src="/images/dummies/randomsekali.jpg"
        alt=""
        width={800}
        height={800}
        className="h-40 object-cover"
      />
      <div className="py-8 px-6 bg-gradient-to-b from-teal-950 to-teal-800 flex flex-col items-center">
        <h3 className="font-bold text-center text-lg">Text-to-Speech</h3>
        <p className="text-center mt-6">
          Hasilkan suara voice-over manusia alami dari teks secara instan dalam
          Bahasa Indonesia
        </p>
        <Link
          href="#"
          className="bg-green-500 text-white py-2.5 px-6 rounded uppercase font-medium mt-4"
        >
          Pelajari selengkapnya
        </Link>
      </div>
    </li>
  );
}
