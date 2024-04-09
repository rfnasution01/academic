import loadable from '@loadable/component'

export const NotFound = loadable(() => import('@/pages/notFound'))
export const ComingSoon = loadable(() => import('@/pages/comingSoon'))
export const Homepage = loadable(() => import('@/pages/home'))
export const Aboutpage = loadable(() => import('@/pages/about'))
export const TentangKampus = loadable(
  () => import('@/pages/academic/tentangKampus'),
)
export const Staff = loadable(() => import('@/pages/academic/staff'))
export const Academicpage = loadable(() => import('@/pages/academic'))
