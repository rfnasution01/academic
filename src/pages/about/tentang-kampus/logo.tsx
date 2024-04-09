import { DataLogo } from '@/libs/consts/dummy/dataLogo'

export default function Logo() {
  const data = DataLogo
  return (
    <div className="flex flex-col gap-y-32 text-[2rem]">
      <h1>
        Filosofi dari logo Konoha mencerminkan esensi dan nilai-nilai yang
        dipegang teguh oleh desa tersebut. Berikut adalah deskripsi filosofi
        dari logo Konoha:
      </h1>
      <ol className="flex flex-col gap-y-16">
        {data.map((item, idx) => (
          <li key={idx} className="flex flex-col gap-y-8">
            <h1 className="flex items-center font-semibold">
              {idx + 1}.{' '}
              <span className="flex flex-row items-center gap-x-8">
                {item?.title} {item?.icon} :
              </span>
            </h1>
            <span className="text-light">{item.desc}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}
