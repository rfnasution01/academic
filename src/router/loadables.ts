import loadable from '@loadable/component'

export const NotFound = loadable(() => import('@/pages/notFound'))
export const ComingSoon = loadable(() => import('@/pages/comingSoon'))
export const Homepage = loadable(() => import('@/pages/home'))
export const Aboutpage = loadable(() => import('@/pages/about'))
export const TentangKampus = loadable(
  () => import('@/pages/about/tentang-kampus'),
)
export const Sejarah = loadable(
  () => import('@/pages/about/tentang-kampus/sejarah'),
)
export const VisiMisi = loadable(
  () => import('@/pages/about/tentang-kampus/visiMisi'),
)
export const Logo = loadable(() => import('@/pages/about/tentang-kampus/logo'))
export const Hymne = loadable(
  () => import('@/pages/about/tentang-kampus/hymne'),
)
export const Staff = loadable(() => import('@/pages/about/staff'))

export const Fasilitas = loadable(() => import('@/pages/about/fasilitas/index'))
export const DojoLatihan = loadable(
  () => import('@/pages/about/fasilitas/dojo'),
)
export const GedungSerbaguna = loadable(
  () => import('@/pages/about/fasilitas/gedung'),
)
export const KantinNinja = loadable(
  () => import('@/pages/about/fasilitas/kantin'),
)
export const KolamRenag = loadable(
  () => import('@/pages/about/fasilitas/kolam'),
)
export const LaboratoriumJutsu = loadable(
  () => import('@/pages/about/fasilitas/laboratorium'),
)
export const RuanganMedis = loadable(
  () => import('@/pages/about/fasilitas/medis'),
)
export const PerpustakaanShinobi = loadable(
  () => import('@/pages/about/fasilitas/perpustakaan'),
)
export const TamanNinja = loadable(
  () => import('@/pages/about/fasilitas/taman'),
)

export const Academicpage = loadable(() => import('@/pages/academic'))
