import { CardTitle } from '@/components/CardTitle'
import { DataPopularNews } from '@/libs/consts/dummy/dataPopularNews'

export function PopularPost() {
  return (
    <div className="rounded-2xl bg-white">
      <CardTitle title="POPULAR" classes="w-4/12 phones:w-6/12" />
      <div className="flex flex-col gap-32 p-32">
        {DataPopularNews.map((item, idx) => (
          <div
            className="flex transform items-center p-16 shadow-md transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
            key={idx}
          >
            <img
              src={item?.image}
              alt={item?.title}
              width={48}
              className="rounded-full"
            />
            <div className="flex flex-col gap-y-16 p-16">
              <span className="text-[2rem] font-bold">{item?.title}</span>
              <div className="flex flex-col gap-y-8">
                <span className="text-[2rem] font-light">
                  {item?.description}
                </span>
                <span className="font-light italic">{item?.uploaded}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
