import { Badge } from '@/components/Badge'
import { CardTitle } from '@/components/CardTitle'
import { DataRecentPost } from '@/libs/consts/dummy/dataRecentPost'

export function RecentPost() {
  return (
    <div className="rounded-2xl bg-white">
      <CardTitle width="w-4/12" />
      <div className="grid grid-cols-12 gap-32 p-32">
        {DataRecentPost.map((item, idx) => (
          <div
            className="col-span-4 transform shadow-md transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
            key={idx}
          >
            <img
              src={item?.image}
              alt={item?.title}
              className="h-[30vh] w-full rounded-md"
            />
            <div className="flex flex-col gap-y-16 p-16">
              <Badge variant="general">
                <span>{item?.tag}</span>
              </Badge>
              <div className="flex flex-col gap-y-8">
                <span className="text-[2rem] font-bold">{item?.title}</span>
                <span className="font-light italic">{item?.uploaded}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
