"use client";

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
import Autoplay from "embla-carousel-autoplay";
import { solutions } from "./_lib/dummies";

export default function Page() {
  return (
    <>
      <section className="container mt-32">
        <div className="max-w-2xl pt-10 md:pt-20">
          <h1 className="text-xl font-bold leading-tight md:text-4xl">
            <span className="text-primary">
              Optimalkan proses bisnis dan layanan Anda dengan solusi AI dari
              perusahaan
            </span>
            &nbsp;
            <span className="text-secondary-500">Afiare terbaik Indonesia</span>
          </h1>
          <p className="mt-6 text-sm md:mt-10 md:text-lg">
            <span className="font-bold">
              Solusi Terpadu Kecerdasan Buatan -
            </span>
            &nbsp;
            <span>
              Natural Language Processing (NLP), mulai dari analisis teks dan
              conversational AI hingga pengenalan suara dalam Bahasa Indonesia
            </span>
          </p>
          <Button className="mt-10 w-full md:mt-20 md:w-auto">
            Mari bicara
          </Button>
        </div>
      </section>
      <section className="container mt-32 flex flex-col items-center">
        <h2 className="text-center text-2xl font-bold text-primary md:text-4xl">
          Solusi Kami
        </h2>
        <p className="mt-6 max-w-4xl text-center text-sm md:mt-10 md:text-lg">
          Kami mengembangkan produk yang memiliki inovasi bernilai tinggi
          menggunakan teknik <span className="italic">Deep learning</span> untuk
          memproses data Anda menjadi wawasan dan meningkatkan nilai bisnis Anda
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {solutions.map((solution, key) => (
            <SolutionCard key={key} solution={solution} />
          ))}
        </ul>
        <div className="mt-10 flex flex-col items-center gap-x-20 md:mt-20 md:flex-row">
          <iframe
            // width="560"
            // height="315"
            src="https://www.youtube.com/embed/Y3AnSJE5DfM?si=J9dkMAErX4umyWzP"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="aspect-video w-full rounded-lg"
          ></iframe>
          <p className="mt-6 text-sm md:mt-0 md:text-lg">
            Tingkatkan performa bisnis serta pelayanan dan pengalaman pelanggan
            Anda ke tahap yang lebih tinggi melalui implementasi kecerdasan
            artifisial
          </p>
        </div>
      </section>
      <section className="container mt-32 flex flex-col">
        <h2 className="text-2xl font-bold text-primary md:text-4xl">
          Klien Kami
        </h2>
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="mt-10 w-full"
        >
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
          {/* <CarouselPrevious /> */}
          {/* <CarouselNext /> */}
        </Carousel>
      </section>
      <section className="container mt-32 flex flex-col">
        <h2 className="text-2xl font-bold text-primary md:text-4xl">Manfaat</h2>
        <div className="mt-10 grid grid-cols-1 gap-x-10 md:grid-cols-2">
          <Image
            src="/images/dummies/randomsekali.jpg"
            alt=""
            width={800}
            height={800}
            className="aspect-video rounded-lg object-cover"
          />
          <ul className="mt-6 flex flex-col gap-y-4 md:mt-0 md:gap-y-8">
            <li className="flex flex-row items-center gap-x-4 text-sm md:text-lg">
              <div>
                <ChartScatter
                  weight="duotone"
                  className="text-secondary-500 text-[2em] md:text-[3em]"
                />
              </div>
              <span>Analisis teks dalam skala besar secara cepat</span>
            </li>

            <li className="flex flex-row items-center gap-x-4 text-sm md:text-lg">
              <div>
                <Clock
                  weight="duotone"
                  className="text-secondary-500 text-[2em] md:text-[3em]"
                />
              </div>

              <span>Menghemat lebih dari 50% waktu dan biaya Anda</span>
            </li>

            <li className="flex flex-row items-center gap-x-4 text-sm md:text-lg">
              <div>
                <PlusMinus
                  weight="duotone"
                  className="text-secondary-500 text-[2em] md:text-[3em]"
                />
              </div>
              <span>Mampu melayani 24/7</span>
            </li>

            <li className="flex flex-row items-center gap-x-4 text-sm md:text-lg">
              <div>
                <ChartLineUp
                  weight="duotone"
                  className="text-secondary-500 text-[2em] md:text-[3em]"
                />
              </div>
              <span>Meningkatkan produktivitas karyawan sampai dengan 80%</span>
            </li>

            <li className="flex flex-row items-center gap-x-4 text-sm md:text-lg">
              <div>
                <Lamp
                  weight="duotone"
                  className="text-secondary-500 text-[2em] md:text-[3em]"
                />
              </div>
              <span>
                Dapatkan wawasan secara langsung untuk pembuatan keputusan
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section className="container mt-20 md:mt-32">
        <div className="from-secondary-300 to-secondary-400 flex flex-col rounded-lg bg-gradient-to-b px-10 py-12">
          <div className="max-w-2xl">
            <h2 className="text-center text-lg font-bold leading-tight text-primary md:text-left md:text-2xl">
              Tingkatkan performa, pelayanan bisnis serta pengalaman pelanggan
              Anda sekarang
            </h2>
            <Button variant="secondary" className="mt-10 w-full md:w-auto">
              Mari bicara
            </Button>
          </div>
        </div>
      </section>
      <section className="container mt-32">
        <h2 className="text-2xl font-bold text-primary md:text-4xl">
          Testimoni
        </h2>
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="mt-10 w-full"
        >
          <CarouselContent>
            {Array.from({ length: 20 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1 lg:basis-1/2">
                <div className="m-1 flex flex-col rounded-lg border border-primary p-8">
                  <h3 className="text-secondary-500 text-lg font-bold md:text-2xl">
                    Rahmat Hidayat
                  </h3>
                  <p className="text-base md:text-lg">
                    Senior Compliance Manager at BCA
                  </p>
                  <p className="mt-6 text-base md:mt-10 md:text-lg">
                    Chatbot Prosa Conversa membantu kami memberikan solusi
                    kepada client untuk mempermudah akses report dari aplikasi
                    DMS kami secara real time dan simple.
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious /> */}
          {/* <CarouselNext /> */}
        </Carousel>
      </section>
      <section className="container mt-32">
        <h2 className="text-2xl font-bold text-primary md:text-4xl">
          Terbaru Di Blog
        </h2>
        <ul className="mt-6 grid grid-cols-1 gap-y-6 md:mt-10 md:grid-cols-3 md:gap-x-6 md:gap-y-0">
          {Array.from({ length: 3 }).map((_, index) => (
            <li key={index}>
              <Image
                src="/images/dummies/randomsekali.jpg"
                alt=""
                width={300}
                height={300}
                className="aspect-video w-full rounded-lg object-cover"
              />
              <h3 className="mt-4 text-base font-bold text-primary md:text-xl">
                Prosa Text to Speech Multibahasa Membuka Peluang bagi Kreator
                Konten Go Global
              </h3>
              <p className="mt-4 text-sm md:text-base">
                Prosa Text to Speech sebagai alat voice AI terkemuka di
                Indonesia telah menambahkan koleksi suara AI multibahasa antara
                lain Bahasa Arab, Mandarin...
              </p>
              <Link
                href="#"
                className="text-secondary-500 mt-4 flex flex-row items-center gap-x-1 text-sm md:text-base"
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
