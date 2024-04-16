import { convertToSlug } from '@/libs/helpers/formatText'
import { usePathname } from '@/libs/hooks/usePathname'
import { useSearch } from '@/libs/hooks/useSearch'
import clsx from 'clsx'

export function SubMenuContentTemplate({
  data,
  menu,
}: {
  data: { title: string; icon: JSX.Element }[]
  menu: string
}) {
  const { onPageClick } = useSearch()
  const { thirdPathname, secondPathname } = usePathname()

  const isActivePage = (item: string) => {
    switch (menu) {
      case 'tentang':
        return (
          (thirdPathname === undefined && item === 'sejarah') ||
          thirdPathname === item
        )
      case 'fasilitas':
        return (
          (thirdPathname === undefined && item === 'dojo-pelatihan') ||
          thirdPathname === item
        )
      default:
        return false
    }
  }

  return (
    <div className="scrollbar flex gap-x-16 overflow-x-auto">
      {data.map((item, idx) => (
        <div
          className={clsx(
            'flex items-center gap-x-12 rounded-lg px-32 py-12 text-[2rem] hover:cursor-pointer hover:text-primary-shade-500',
            {
              'text-primary-shade-500': isActivePage(
                convertToSlug(item?.title),
              ),
            },
          )}
          key={idx}
          onClick={() =>
            onPageClick(
              secondPathname === undefined
                ? `tentang-kampus/${convertToSlug(item?.title)}`
                : convertToSlug(item?.title),
            )
          }
        >
          <span>{item?.icon}</span>
          <span className="text-nowrap">{item?.title}</span>
        </div>
      ))}
    </div>
  )
}
