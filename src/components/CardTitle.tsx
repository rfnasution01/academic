export function CardTitle({
  title,
  classes,
}: {
  title: string
  classes: string
}) {
  return (
    <div className="flex border-b-2 border-primary-shade-500 text-white">
      <div
        className={`flex ${classes} items-center justify-center bg-primary-shade-500 p-16 text-[2rem]`}
      >
        {title}
      </div>
      <div className="border-b-[32px] border-r-[32px] border-b-primary border-r-transparent" />
    </div>
  )
}
