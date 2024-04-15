import clsx from 'clsx'

type CardOrganizationProps = {
  list: CardOrganizationListProps
  idx?: number
}

type CardOrganizationListProps = {
  nama: string
  posisi: string
  jenjang: string
  img: string
}

export function CardOrganization({ list, idx = 0 }: CardOrganizationProps) {
  return (
    <div className="flex w-[18rem] flex-col items-center justify-center gap-y-12 rounded-2xl border bg-white shadow-lg hover:cursor-pointer hover:shadow-2xl">
      <div className="p-12">
        <img
          src={list?.img}
          alt={list?.posisi}
          className={clsx('w-[12rem] rounded-full border-4', {
            'border-orange-300': idx === 0,
            'border-red-300': idx === 1,
            'border-blue-300': idx === 2,
            'border-green-300': idx === 3,
          })}
        />
      </div>
      <div className="flex w-full flex-1 flex-col items-center justify-center gap-y-8 text-center align-middle">
        <span className="flex flex-1 items-center justify-center text-[2rem] font-bold">
          {list?.nama}
        </span>
        <span
          className={clsx('w-full p-12 font-light', {
            'bg-orange-300': idx === 0,
            'bg-red-300': idx === 1,
            'bg-blue-300': idx === 2,
            'bg-green-300': idx === 3,
          })}
        >
          {list?.jenjang}
        </span>
      </div>
    </div>
  )
}
