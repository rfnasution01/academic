import { Button } from '@/components/Button'
import { DialogHelpers } from '@/components/ui/dialog'
import { useState } from 'react'
import { FormLogin } from './formLogin'

export function ButtonGroup() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="flex items-center gap-x-32">
      <Button
        variant="outlined-primary"
        classes="text-[1.8rem] min-w-[11rem]"
        onClick={() => setIsOpen(true)}
      >
        Login
      </Button>
      <Button variant="solid-primary" classes="text-[1.8rem] min-w-[11rem]">
        Signup
      </Button>
      <DialogHelpers
        title={
          <h3 className="flex h-[7.6rem] items-center bg-primary-shade-500 px-24 text-[3.2rem] text-secondary">
            Aca<span className="text-primary-shade-200">Demy</span>
          </h3>
        }
        open={isOpen}
        setOpen={setIsOpen}
        noPadding
        size="medium"
        customComponent={
          <div className="flex flex-col items-center gap-y-32">
            <FormLogin setIsOpen={setIsOpen} />
          </div>
        }
      />
    </div>
  )
}
