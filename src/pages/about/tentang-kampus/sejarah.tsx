import { DataSejarah } from '@/libs/consts/dummy/dataSejarah'

export default function Sejarah() {
  const data = DataSejarah

  return (
    <div className="flex flex-col gap-y-16 text-justify text-[2rem]">
      <h1 className="text-[3rem] font-bold">{data?.title}</h1>
      <h5 className="text-[2rem] italic">{`"${data?.quote}"`}</h5>
      <div className="space-y-16">
        {data?.description.split('\n').map((paragraph, index) => (
          <p key={index} style={{ textIndent: '7rem' }}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )
}
