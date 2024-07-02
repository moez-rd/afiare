import Image from "next/image";
import Link from "next/link";
import { Button } from "../../atoms/button";
import { Solution } from "@/app/_lib/definitions";

interface Props {
  solution: Solution;
}

export default function SolutionCard({ solution }: Props) {
  return (
    <li className="overflow-hidden rounded-xl text-white">
      <Image
        src={solution.image.src}
        alt={solution.image.alt}
        width={800}
        height={800}
        className="h-32 object-cover"
      />
      <div className="to-secondary-950 flex flex-col items-center bg-gradient-to-b from-primary px-6 py-8">
        <h3 className="text-center text-lg font-bold">{solution.name}</h3>
        <p className="mt-6 text-center text-sm">{solution.description}</p>
        <Link href={solution.href}>
          <Button className="mt-4">Pelajari selengkapnya</Button>
        </Link>
      </div>
    </li>
  );
}
