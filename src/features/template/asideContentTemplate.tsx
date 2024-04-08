import { convertToSlug } from '@/libs/helpers/formatText'
import { usePathname } from '@/libs/hooks/usePathname'
import { useSearch } from '@/libs/hooks/useSearch'
import clsx from 'clsx'
import { List } from 'lucide-react'
import { ReactNode, useState } from 'react'

export function AsideContentTemplate({
  content,
  dataMapping,
}: {
  content?: ReactNode
  dataMapping: { title: string; icon: JSX.Element }[]
}) {
  const { pageString, onPageClick } = useSearch()
  const { firstPathname } = usePathname()
  const [isShow, setIsShow] = useState<boolean>(false)

  const isActivePage = (item: string) => {
    if (
      (pageString === '1' && item === 'tentang-kampus') ||
      (pageString === '1' && item === 'program-studi') ||
      pageString === item
    ) {
      return true
    }
    return false
  }

  return (
    <div className="grid h-full grid-cols-12 gap-x-32 p-32">
      <div
        className={clsx('col-span-2 ', {
          'phones:col-span-4': isShow,
          'phones:col-span-2': !isShow,
        })}
      >
        <div className="flex flex-col gap-y-4">
          <div className="hidden phones:block">
            <div className="mb-32 flex items-center justify-between pl-16">
              <span
                className={clsx('text-[2rem] font-semibold', {
                  block: isShow,
                  hidden: !isShow,
                })}
              >
                {firstPathname?.includes('about') ? 'About' : 'Akademik'}
              </span>
              <span onClick={() => setIsShow(!isShow)}>
                <List />
              </span>
            </div>
          </div>
          {dataMapping.map((item, idx) => (
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
              <span className={clsx('', { block: isShow, hidden: !isShow })}>
                {item?.title}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div
        className={clsx('col-span-10 bg-blue-300', {
          'phones:col-span-8': isShow,
          'phones:col-span-10': !isShow,
        })}
      >
        {content}
      </div>
    </div>
  )
}
