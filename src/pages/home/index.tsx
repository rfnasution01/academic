import { Footer } from '@/features/footer'
import { PopularPost, RecentPost, Services } from '@/features/home'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

export default function Homepage() {
  const image = [
    '/img/akademi-konoha.webp',
    '/img/akademi-konoha-1.webp',
    '/img/akademi-konoha-2.webp',
  ]

  const [showImage, setShowImage] = useState<string>(image[0])
  const [imageIndex, setImageIndex] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = image.indexOf(showImage)
      let nextIndex = currentIndex + 1
      setImageIndex(nextIndex)

      if (nextIndex >= image.length) {
        nextIndex = 0
      }

      setShowImage(image[nextIndex])
    }, 3000) // 3 detik

    return () => clearInterval(interval)
  }, [showImage])

  return (
    <div className="flex flex-col">
      <div className="relative">
        <img
          src={showImage}
          alt="Konoha Academy"
          className="h-[calc(100vh-_7.6rem)] w-full"
        />
        <div className="text-xl absolute bottom-0 left-1/2 flex -translate-x-1/2 transform items-center gap-x-24 rounded-2xl bg-slate-50 bg-opacity-35 px-32 py-16 font-bold text-white hover:cursor-pointer hover:bg-opacity-70">
          {[...Array(image.length)].map((_, index) => (
            <div
              key={index}
              className={clsx('h-24 w-24 rounded-full', {
                'bg-primary-shade-500': imageIndex === index + 1,
                'bg-slate-300': imageIndex !== index + 1,
              })}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-12 gap-32 px-32 py-32">
        <div className="col-span-9 phones:col-span-12">
          <RecentPost />
        </div>
        <div className="col-span-3 phones:col-span-12">
          <PopularPost />
        </div>
      </div>
      <Services />
      <Footer />
    </div>
  )
}
