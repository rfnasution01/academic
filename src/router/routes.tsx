import { createBrowserRouter } from 'react-router-dom'

import RootLayout from '@/App'
import {
  Aboutpage,
  Academicpage,
  ComingSoon,
  DojoLatihan,
  Fasilitas,
  GedungSerbaguna,
  Homepage,
  Hymne,
  KantinNinja,
  KolamRenag,
  LaboratoriumJutsu,
  Logo,
  NotFound,
  PerpustakaanShinobi,
  RuanganMedis,
  Sejarah,
  Staff,
  TamanNinja,
  TentangKampus,
  VisiMisi,
} from './loadables'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <Homepage />,
      },
      {
        path: 'about',
        element: <Aboutpage />,
        children: [
          {
            path: '',
            element: <TentangKampus />,
            children: [{ path: '', element: <Sejarah /> }],
          },
          {
            path: 'tentang-kampus',
            element: <TentangKampus />,
            children: [
              { path: '', element: <Sejarah /> },
              {
                path: 'sejarah',
                element: <Sejarah />,
              },
              {
                path: 'visi-misi',
                element: <VisiMisi />,
              },
              {
                path: 'filosofi-logo',
                element: <Logo />,
              },
              {
                path: 'hymne-dan-mars',
                element: <Hymne />,
              },
            ],
          },
          {
            path: 'staff',
            element: <Staff />,
          },
          {
            path: 'fasilitas',
            element: <Fasilitas />,
            children: [
              { path: '', element: <DojoLatihan /> },
              {
                path: 'dojo-pelatihan',
                element: <DojoLatihan />,
              },
              {
                path: 'perpustakaan-shinobi',
                element: <PerpustakaanShinobi />,
              },
              {
                path: 'laboratorium-jutsu',
                element: <LaboratoriumJutsu />,
              },
              {
                path: 'gedung-serbaguna',
                element: <GedungSerbaguna />,
              },
              {
                path: 'taman-latihan',
                element: <TamanNinja />,
              },
              {
                path: 'kantin-ninja',
                element: <KantinNinja />,
              },
              {
                path: 'ruangan-medis',
                element: <RuanganMedis />,
              },
              {
                path: 'kolam-renang',
                element: <KolamRenag />,
              },
            ],
          },
          {
            path: 'akreditasi',
            element: <ComingSoon />,
          },
          {
            path: 'prestasi',
            element: <ComingSoon />,
          },
          {
            path: 'alumni',
            element: <ComingSoon />,
          },
          {
            path: 'karir',
            element: <ComingSoon />,
          },
          {
            path: 'lokasi',
            element: <ComingSoon />,
          },
          {
            path: 'hubungi-kami',
            element: <ComingSoon />,
          },
        ],
      },
      {
        path: 'academic',
        element: <Academicpage />,
        children: [
          {
            path: '',
            element: <ComingSoon />,
          },
          {
            path: 'program-studi',
            element: <ComingSoon />,
          },
          {
            path: 'kurikulum',
            element: <ComingSoon />,
          },
          {
            path: 'jadwal-kuliah',
            element: <ComingSoon />,
          },
          {
            path: 'kalender-akademik',
            element: <ComingSoon />,
          },
          {
            path: 'program-internasional',
            element: <ComingSoon />,
          },
          {
            path: 'proyek-penelitian',
            element: <ComingSoon />,
          },
          {
            path: 'sertifikasi',
            element: <ComingSoon />,
          },
          {
            path: 'beasiswa',
            element: <ComingSoon />,
          },
          {
            path: 'panduan-akademik',
            element: <ComingSoon />,
          },
          {
            path: 'pusat-bantuan',
            element: <ComingSoon />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
