import Image from "next/image";
import SolutionCard from "./_ui/molecules/solution/card";
import {
  ArrowRight,
  ChartLineUp,
  ChartScatter,
  Clock,
  Lamp,
  PlusMinus,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/app/_ui/atoms/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./_ui/atoms/carousel";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="container mt-32">
        <div className="max-w-2xl pt-20">
          <h1 className="text-4xl font-bold leading-tight">
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
      <section className="container mt-32 flex flex-col items-center">
        <h2 className="text-center text-4xl font-bold text-teal-700">
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
      <section className="container mt-32 flex flex-col">
        <h2 className="text-4xl font-bold text-teal-700">Klien Kami</h2>
        <Carousel className="mt-10 w-full">
          <CarouselContent>
            {Array.from({ length: 20 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/6">
                <div className="m-1 flex flex-row items-center justify-center rounded-lg border border-teal-600 p-8">
                  <Image
                    src="/images/dummies/logoipsum.svg"
                    alt=""
                    width={80}
                    height={80}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section className="container mt-32 flex flex-col">
        <h2 className="text-4xl font-bold text-teal-700">Manfaat</h2>
        <div className="mt-10 grid grid-cols-2 gap-x-10">
          <Image
            src="/images/dummies/randomsekali.jpg"
            alt=""
            width={800}
            height={800}
            className="aspect-video rounded-lg object-cover"
          />
          <ul className="flex flex-col gap-y-8">
            <li className="flex flex-row items-center gap-x-4 text-lg">
              <div>
                <ChartScatter
                  weight="duotone"
                  className="text-[3em] text-green-500"
                />
              </div>
              <span>Analisis teks dalam skala besar secara cepat</span>
            </li>

            <li className="flex flex-row items-center gap-x-4 text-lg">
              <div>
                <Clock weight="duotone" className="text-[3em] text-green-500" />
              </div>

              <span>Menghemat lebih dari 50% waktu dan biaya Anda</span>
            </li>

            <li className="flex flex-row items-center gap-x-4 text-lg">
              <div>
                <PlusMinus
                  weight="duotone"
                  className="text-[3em] text-green-500"
                />
              </div>
              <span>Mampu melayani 24/7</span>
            </li>

            <li className="flex flex-row items-center gap-x-4 text-lg">
              <div>
                <ChartLineUp
                  weight="duotone"
                  className="text-grehttps://prosa.ai/contacten-500 text-[3em]"
                />
              </div>
              <span>Meningkatkan produktivitas karyawan sampai dengan 80%</span>
            </li>

            <li className="flex flex-row items-center gap-x-4 text-lg">
              <div>
                <Lamp weight="duotone" className="text-[3em] text-green-500" />
              </div>
              <span>
                Dapatkan wawasan secara langsung untuk pembuatan keputusan
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section className="container mt-32">
        <div className="flex flex-col rounded-lg bg-gradient-to-b from-green-300 to-green-400 px-10 py-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold leading-tight text-teal-700">
              Tingkatkan performa, pelayanan bisnis serta pengalaman pelanggan
              Anda sekarang
            </h2>
            <Button variant="secondary" className="mt-10">
              Mari bicara
            </Button>
          </div>
        </div>
      </section>
      <section className="container mt-32">
        <h2 className="text-4xl font-bold text-teal-700">Testimoni</h2>
        <Carousel className="mt-10 w-full">
          <CarouselContent>
            {Array.from({ length: 20 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1 lg:basis-1/2">
                <div className="m-1 flex flex-col rounded-lg border border-teal-600 p-8">
                  <h3 className="text-2xl font-bold text-green-500">
                    Rahmat Hidayat
                  </h3>
                  <p className="text-lg">Senior Compliance Manager at BCA</p>
                  <p className="mt-10 text-lg">
                    Chatbot Prosa Conversa membantu kami memberikan solusi
                    kepada client untuk mempermudah akses report dari aplikasi
                    DMS kami secara real time dan simple.
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section className="container mt-32">
        <h2 className="text-4xl font-bold text-teal-700">Terbaru Di Blog</h2>
        <ul className="mt-10 grid grid-cols-3 gap-x-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <li key={index}>
              <Image
                src="/images/dummies/randomsekali.jpg"
                alt=""
                width={300}
                height={300}
                className="aspect-video w-full rounded-lg object-cover"
              />
              <h3 className="mt-4 text-xl font-bold text-teal-700">
                Prosa Text to Speech Multibahasa Membuka Peluang bagi Kreator
                Konten Go Global
              </h3>
              <p className="mt-4">
                Prosa Text to Speech sebagai alat voice AI terkemuka di
                Indonesia telah menambahkan koleksi suara AI multibahasa antara
                lain Bahasa Arab, Mandarin...
              </p>
              <Link
                href="#"
                className="mt-4 flex flex-row items-center gap-x-1 text-green-500"
              >
                <span>Baca Selengkapnya</span>
                <ArrowRight />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
