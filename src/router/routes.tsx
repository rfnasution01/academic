import { createBrowserRouter } from 'react-router-dom'

import RootLayout from '@/App'
import {
  Aboutpage,
  Academicpage,
  ComingSoon,
  Homepage,
  NotFound,
  Staff,
  TentangKampus,
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
          },
          {
            path: 'tentang-kampus',
            element: <TentangKampus />,
          },
          {
            path: 'staff',
            element: <Staff />,
          },
          {
            path: 'fasilitas',
            element: <ComingSoon />,
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
