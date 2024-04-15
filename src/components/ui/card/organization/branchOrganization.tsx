import clsx from 'clsx'

type BranchOrganizationProps = {
  isBefore?: boolean
  isAfter?: boolean
  isSeparator?: boolean
  lengthBefore?: number
  lengthAfter?: number
}

export function BranchOrganization({
  isAfter,
  isBefore,
  isSeparator,
  lengthBefore = 0,
  lengthAfter = 0,
}: BranchOrganizationProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      {isBefore && lengthBefore > 0 && (
        <div className="flex items-center justify-center">
          {lengthBefore === 1 ? (
            <div className="h-[4rem] border-l-2 border-black" />
          ) : (
            Array(lengthBefore - 1)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className={clsx(
                    `h-[4rem] w-[24rem] border-l-2 border-t-2 border-black`,
                    { 'border-r-2': index === lengthBefore - 2 },
                  )}
                />
              ))
          )}
        </div>
      )}
      {isAfter && lengthAfter > 0 && (
        <div className="flex items-center justify-center">
          {lengthAfter === 1 ? (
            <div className="h-[4rem] border-l-2 border-black" />
          ) : (
            Array(lengthAfter - 1)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className={clsx(
                    `h-[4rem] w-[24rem] border-b-2 border-l-2 border-black`,
                    { 'border-r-2': index === lengthAfter - 2 },
                  )}
                />
              ))
          )}
        </div>
      )}
      {isSeparator && <div className="h-[4rem] border-l-2 border-black" />}
    </div>
  )
}
