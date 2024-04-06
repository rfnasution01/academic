export function CardTitle({
  width,
}: {
  width:
    | 'w-1/12'
    | 'w-2/12'
    | 'w-3/12'
    | 'w-4/12'
    | 'w-5/12'
    | 'w-6/12'
    | 'w-7/12'
    | 'w-8/12'
    | 'w-9/12'
    | 'w-10/12'
    | 'w-11/12'
    | 'w-12/12'
}) {
  return (
    <div className="flex border-b-2 border-primary-shade-500 text-white">
      <div
        className={`flex ${width} items-center justify-center bg-primary-shade-500 p-16 text-[2rem]`}
      >
        RECENT POST
      </div>
      <div className="border-b-[32px] border-r-[32px] border-b-primary border-r-transparent" />
    </div>
  )
}
