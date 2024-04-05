import { createBrowserRouter } from 'react-router-dom'

import RootLayout from '@/App'
import { Aboutpage, Academicpage, Homepage, NotFound } from './loadables'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <RootLayout />
    ),
    children: [
      {
        path: '',
        element: <Homepage />,
      },
      {
        path: 'about',
        element: <Aboutpage />,
      },
      {
        path: 'academic',
        element: <Academicpage />,
      }
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
