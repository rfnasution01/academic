import { Button } from '@/components/Button'
import { DialogHelpers } from '@/components/ui/dialog'
import { useState } from 'react'
import { FormLogin } from './formLogin'

export function ButtonGroupMobile() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isLogin, setIsLogin] = useState<boolean>(false)

  return (
    <div className="flex w-full flex-col gap-y-24">
      <Button
        variant="solid-primary"
        classes="text-[2rem]"
        onClick={() => {
          setIsLogin(true)
          setIsOpen(true)
        }}
      >
        Login
      </Button>
      <Button
        classes="text-[2rem]"
        onClick={() => {
          setIsLogin(false)
          setIsOpen(true)
        }}
      >
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
        size="full"
        customComponent={
          <div className="flex flex-col items-center gap-y-32">
            <FormLogin
              setIsOpen={setIsOpen}
              isLogin={isLogin}
              setIsLogin={setIsLogin}
            />
          </div>
        }
      />
    </div>
  )
}
