import Image from "next/image";
import SolutionCard from "./_ui/molecules/solution/card";
import {
  ChartLineUp,
  ChartScatter,
  Clock,
  Lamp,
  PlusMinus,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/app/_ui/atoms/button";

export default function Page() {
  return (
    <>
      <section className="container mt-40">
        <div className="max-w-2xl pt-20">
          <h1 className="text-4xl font-semibold leading-tight">
            <span className="text-teal-700">
              Optimalkan proses bisnis dan layanan Anda dengan solusi AI dari
              perusahaan
            </span>
            &nbsp;
            <span className="text-green-500">Afiare terbaik Indonesia</span>
          </h1>
          <p className="mt-10 text-lg">
            <span className="font-bold">
              Solusi Terpadu Kecerdasan Buatan -
            </span>
            &nbsp;
            <span>
              Natural Language Processing (NLP), mulai dari analisis teks dan
              conversational AI hingga pengenalan suara dalam Bahasa Indonesia
            </span>
          </p>
          <Button className="mt-20">Mari bicara</Button>
        </div>
      </section>
      <section className="container mt-40 flex flex-col items-center">
        <h2 className="text-center text-5xl font-bold text-teal-700">
          Solusi Kami
        </h2>
        <p className="mt-10 max-w-4xl text-center text-lg">
          Kami mengembangkan produk yang memiliki inovasi bernilai tinggi
          menggunakan teknik <span className="italic">Deep learning</span> untuk
          memproses data Anda menjadi wawasan dan meningkatkan nilai bisnis Anda
        </p>
        <ul className="mt-8 grid grid-cols-3 gap-8">
          <SolutionCard />
          <SolutionCard />
          <SolutionCard />
          <SolutionCard />
          <SolutionCard />
          <SolutionCard />
          <SolutionCard />
          <SolutionCard />
          <SolutionCard />
        </ul>
        <div className="mt-20 flex flex-row items-center gap-x-20">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=ARVA-_YGrcVUgbj1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="aspect-video rounded-lg"
          ></iframe>
          <p className="text-lg">
            Tingkatkan performa bisnis serta pelayanan dan pengalaman pelanggan
            Anda ke tahap yang lebih tinggi melalui implementasi kecerdasan
            artifisial
          </p>
        </div>
      </section>
      <section className="container mt-40 flex flex-col">
        <h2 className="text-5xl font-bold text-teal-700">Klien Kami</h2>
      </section>
      <section className="container mt-40 flex flex-col">
        <h2 className="text-5xl font-bold text-teal-700">Manfaat</h2>
        <div className="mt-10 grid grid-cols-2 gap-x-10">
          <Image
            src="/images/dummies/randomsekali.jpg"
            alt=""
            width={800}
            height={800}
            className="rounded-lg object-cover"
          />
          <ul className="flex flex-col gap-y-4">
            <li className="flex flex-row items-center gap-x-4 text-lg">
              <div>
                <ChartScatter
                  weight="duotone"
                  className="text-[4em] text-green-500"
                />
              </div>
              <span>Analisis teks dalam skala besar secara cepat</span>
            </li>

            <li className="flex flex-row items-center gap-x-4 text-lg">
              <div>
                <Clock weight="duotone" className="text-[4em] text-green-500" />
              </div>

              <span>Menghemat lebih dari 50% waktu dan biaya Anda</span>
            </li>

            <li className="flex flex-row items-center gap-x-4 text-lg">
              <div>
                <PlusMinus
                  weight="duotone"
                  className="text-[4em] text-green-500"
                />
              </div>
              <span>Mampu melayani 24/7</span>
            </li>

            <li className="flex flex-row items-center gap-x-4 text-lg">
              <div>
                <ChartLineUp
                  weight="duotone"
                  className="text-[4em] text-green-500"
                />
              </div>
              <span>Meningkatkan produktivitas karyawan sampai dengan 80%</span>
            </li>

            <li className="flex flex-row items-center gap-x-4 text-lg">
              <div>
                <Lamp weight="duotone" className="text-[4em] text-green-500" />
              </div>
              <span>
                Dapatkan wawasan secara langsung untuk pembuatan keputusan
              </span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
