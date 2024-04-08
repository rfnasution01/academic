import { DataListAbout } from '@/libs/consts/dummy/dataListAbout'
import { convertToSlug } from '@/libs/helpers/formatText'
import { useSearch } from '@/libs/hooks/useSearch'
import clsx from 'clsx'

export function AboutAside() {
  const { pageString, onPageClick } = useSearch()

  const isActivePage = (item: string) => {
    if (
      (pageString === '1' && item === 'tentang-kampus') ||
      pageString === item
    ) {
      return true
    }
    return false
  }

  return (
    <div className="flex flex-col gap-y-4">
      {DataListAbout.map((item, idx) => (
        <div
          className={clsx(
            'flex items-center gap-x-16 border-l-2 p-16 text-[2rem] font-medium hover:cursor-pointer hover:border-primary-shade-500 hover:bg-purple-200 hover:text-primary-shade-500',
            {
              'border-l-2 border-primary-shade-500 bg-purple-200 text-primary':
                isActivePage(convertToSlug(item?.title)),
              'border-transparent text-slate-600': !isActivePage(
                convertToSlug(item?.title),
              ),
            },
          )}
          key={idx}
          onClick={() => onPageClick(convertToSlug(item?.title))}
        >
          <span>{item?.icon}</span>
          {item?.title}
        </div>
      ))}
    </div>
  )
}
