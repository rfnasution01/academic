import { DataHymne } from '@/libs/consts/dummy/dataHymne'

export default function Hymne() {
  const data = DataHymne
  return (
    <div className="flex flex-col gap-y-32 text-[2rem]">
      {data.map((item, idx) => (
        <li key={idx} className="flex flex-col gap-y-8">
          <h1 className="text-[2.4rem] font-bold">{item?.title}</h1>
          <span className="text-light">
            {item?.desc
              .split('\n')
              .map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </span>
        </li>
      ))}
    </div>
  )
}
