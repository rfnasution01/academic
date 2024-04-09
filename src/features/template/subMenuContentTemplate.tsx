import { DataTentangKampus } from '@/libs/consts/dummy/dataTentangKampus'
import { convertToSlug } from '@/libs/helpers/formatText'
import { usePathname } from '@/libs/hooks/usePathname'
import { useSearch } from '@/libs/hooks/useSearch'
import clsx from 'clsx'

export function SubMenuContentTemplate() {
  const { onPageClick } = useSearch()
  const { thirdPathname } = usePathname()

  const isActivePage = (item: string) => {
    if (
      (thirdPathname === undefined && item === 'sejarah') ||
      thirdPathname === item
    ) {
      return true
    }
    return false
  }

  return (
    <div className="scrollbar flex gap-x-16 overflow-x-auto">
      {DataTentangKampus.map((item, idx) => (
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
          onClick={() => onPageClick(convertToSlug(item?.title))}
        >
          <span>{item?.icon}</span>
          <span className="text-nowrap">{item?.title}</span>
        </div>
      ))}
    </div>
  )
}
