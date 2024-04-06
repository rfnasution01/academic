import { Badge } from '@/components/Badge'
import { CardTitle } from '@/components/CardTitle'
import { Pagination } from '@/components/Pagination'
import { DataRecentPost } from '@/libs/consts/dummy/dataRecentPost'
import { useSearch } from '@/libs/hooks/useSearch'

export function RecentPost() {
  const { currentPage } = useSearch()
  const dataPerPage = 6
  const totalPage = Math.ceil(DataRecentPost.length / dataPerPage)

  return (
    <div className="h-full rounded-2xl bg-white">
      <CardTitle title="RECENT POST" classes="w-4/12 phones:w-6/12" />
      <div className="grid grid-cols-12 gap-32 p-32">
        {DataRecentPost.slice(
          currentPage * dataPerPage - dataPerPage,
          currentPage * dataPerPage,
        ).map((item, idx) => (
          <div
            className="col-span-4 transform shadow-md transition-transform duration-300 hover:scale-105 hover:cursor-pointer phones:col-span-6"
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
      <Pagination
        totalPage={totalPage}
        classes="flex justify-end px-32 pb-32"
      />
    </div>
  )
}
