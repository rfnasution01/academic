import { DataHymne } from '@/libs/consts/dummy/dataHymne'

export default function Hymne() {
  const data = DataHymne
  return (
    <div className="grid grid-cols-12 gap-y-32 text-[2rem]">
      {data.map((item, idx) => (
        <div key={idx} className="col-span-6 phones:col-span-12">
          <h1 className="mb-16 text-[2.4rem] font-bold">{item?.title}</h1>
          <span className="text-light">
            {item?.desc
              .split('\n')
              .map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </span>
        </div>
      ))}
    </div>
  )
}
