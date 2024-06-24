import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  MediumLogo,
  TiktokLogo,
  XLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";

export type Config = typeof config;

export type LinkType = {
  name: string;
  href: string;
};

export const config = {
  name: "Afaire",
  metadata: {
    title: "Afiare",
    description: "Lorem ipsum",
    lang: "id",
  },
  navigation: [
    {
      name: "Solusi",
      children: [
        {
          name: "Pemrosesan Suara",
          href: "#",
        },
        {
          name: "Optimasi Bisnis",
          href: "#",
        },
        {
          name: "eKYC & Deteksi Penipuan",
          href: "#",
        },
        {
          name: "NLP & Pemroesan Teks",
          href: "#",
        },
        {
          name: "Interaksi Pelanggan",
          href: "#",
        },
      ],
    },
    {
      name: "Perusahaan",
      children: [
        {
          name: "Tentang Kami",
          href: "/profil",
        },
        {
          name: "Karier",
          href: "/visi-misi",
        },
        {
          name: "Mitra",
          href: "/sarana-prasarana",
        },
      ],
    },
    {
      name: "Industri",
      children: [
        {
          name: "BFSI",
          href: "/pelayanan-umum",
        },
        {
          name: "Public Sector",
          href: "/pelayanan-khusus",
        },
        {
          name: "Telco",
          href: "/pelayanan-khusus",
        },
        {
          name: "Healthcare",
          href: "/pelayanan-khusus",
        },
        {
          name: "Edutech",
          href: "/pelayanan-khusus",
        },
        {
          name: "Contact Center",
          href: "/pelayanan-khusus",
        },
      ],
    },
    {
      name: "Resources",
      children: [
        {
          name: "Brosur",
          href: "/pelayanan-umum",
        },
        {
          name: "Blog",
          href: "/pelayanan-khusus",
        },
        {
          name: "Riset",
          href: "/pelayanan-khusus",
        },
      ],
    },
  ],
  footer_links: [
    {
      category: "Industri",
      links: [
        {
          name: "BSFI",
          href: "#",
        },
        {
          name: "Public Sector",
          href: "#",
        },
        {
          name: "Telco",
          href: "#",
        },
        {
          name: "Healthcare",
          href: "#",
        },
        {
          name: "Edutech",
          href: "#",
        },
        {
          name: "Contact Center",
          href: "#",
        },
      ],
    },
    {
      category: "Perusahaan",
      links: [
        {
          name: "Tentang Kami",
          href: "#",
        },
        {
          name: "Riset",
          href: "#",
        },
        {
          name: "Karier",
          href: "#",
        },
        {
          name: "Hubungi Kami",
          href: "#",
        },
      ],
    },
    {
      category: "Komunitas",
      links: [
        {
          name: "Pengembang",
          href: "#",
        },
        {
          name: "Mitra",
          href: "#",
        },
        {
          name: "Blog",
          href: "#",
        },
      ],
    },
    {
      category: "Ikuti Kami",
      links: [
        {
          icon: LinkedinLogo,
          href: "#",
        },
        {
          icon: MediumLogo,
          href: "#",
        },
        {
          icon: InstagramLogo,
          href: "#",
        },
        {
          icon: YoutubeLogo,
          href: "#",
        },
        {
          icon: TiktokLogo,
          href: "#",
        },
        {
          icon: FacebookLogo,
          href: "#",
        },
        {
          icon: XLogo,
          href: "#",
        },
      ],
    },
  ],
};
