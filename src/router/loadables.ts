import loadable from '@loadable/component'

export const NotFound = loadable(() => import('@/pages/notFound'))
export const Homepage = loadable(() => import('@/pages/home'))
export const Aboutpage = loadable(
  () => import('@/pages/about'),
)
export const Academicpage = loadable(() => import('@/pages/academic'))
