export type Config = typeof config;

export const config = {
  name: "Afaire",
  metadata: {
    title: "Afiare",
    description: "Lorem ipsum",
    lang: "id",
  },
  navigation: [
    {
      name: "Beranda",
      href: "/",
    },
    {
      name: "Tentang Kami",
      children: [
        {
          name: "Profil Umum",
          href: "/profil",
        },
        {
          name: "Visi Misi",
          href: "/visi-misi",
        },
        {
          name: "Sarana Prasarana",
          href: "/sarana-prasarana",
        },
        {
          name: "Bagian Organisasi",
          href: "/organisasi",
        },
      ],
    },
    {
      name: "Jenis Pelayanan",
      children: [
        {
          name: "Pelayanan Umum",
          href: "/pelayanan-umum",
        },
        {
          name: "Pelayanan Khusus",
          href: "/pelayanan-khusus",
        },
      ],
    },
    {
      name: "Tarif Pelayanan",
      href: "/tarif-pelayanan",
    },
  ],
} as const;
