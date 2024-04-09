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
export const Academicpage = loadable(() => import('@/pages/academic'))
