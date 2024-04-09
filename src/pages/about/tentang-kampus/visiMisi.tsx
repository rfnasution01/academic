import { DataVisiMisi } from '@/libs/consts/dummy/dataVisiMisi'

export default function VisiMisi() {
  const data = DataVisiMisi
  return (
    <div className="flex flex-col gap-y-32 text-[2rem]">
      <div className="flex flex-col gap-y-12">
        <h5 className="text-[2.4rem] font-bold">Visi</h5>
        <span>{`"${data?.visi}"`}</span>
      </div>
      <div className="flex flex-col gap-y-12">
        <h5 className="text-[2.4rem] font-bold">Misi</h5>
        <ol className="list-inside list-decimal">
          {data?.misi.map((item, idx) => (
            <li key={idx} className="mb-8">
              {item}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
