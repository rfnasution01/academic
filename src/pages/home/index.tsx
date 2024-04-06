import { PopularPost, RecentPost } from '@/features/home'

export default function Homepage() {
  return (
    <div className="flex flex-col">
      <img
        src="/img/akademi-konoha.webp"
        alt="akademi konoha"
        className="h-[calc(100vh_-_7.6rem)] w-full"
      />
      <div className="grid grid-cols-12 gap-32 px-32 py-32">
        <div className="col-span-9 phones:col-span-12">
          <RecentPost />
        </div>
        <div className="col-span-3 phones:col-span-12">
          <PopularPost />
        </div>
      </div>
    </div>
  )
}
