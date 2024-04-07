import { Button } from '@/components/Button'
import { DialogHelpers } from '@/components/ui/dialog'
import { useState } from 'react'
import { FormLogin } from './formLogin'
import { Bell, ChevronDown, Settings } from 'lucide-react'
import { capitalizeFirstLetterFromLowercase } from '@/libs/helpers/formatText'

export function ButtonGroup() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isLogin, setIsLogin] = useState<boolean>(false)

  const token = localStorage.getItem('token')
  const username = localStorage.getItem('username')

  return (
    <div className="flex items-center gap-x-32">
      {token ? (
        <>
          <span>
            <Settings size={16} />
          </span>
          <span>
            <Bell size={16} />
          </span>
          <div className="flex items-center gap-x-8">
            <img
              src="/img/logo.png"
              alt="Profile"
              width={18}
              className="rounded-full"
            />
            <span className="text-[2rem]">
              {capitalizeFirstLetterFromLowercase(username ?? '')}
            </span>
            <span>
              <ChevronDown size={16} />
            </span>
          </div>
          <Button
            variant="outlined-primary"
            classes="text-[1.8rem] min-w-[11rem]"
            onClick={() => {
              localStorage.removeItem('token')
              location.reload()
            }}
          >
            Logout
          </Button>
        </>
      ) : (
        <>
          <Button
            variant="outlined-primary"
            classes="text-[1.8rem] min-w-[11rem]"
            onClick={() => {
              setIsLogin(true)
              setIsOpen(true)
            }}
          >
            Login
          </Button>
          <Button
            variant="solid-primary"
            classes="text-[1.8rem] min-w-[11rem]"
            onClick={() => {
              setIsLogin(false)
              setIsOpen(true)
            }}
          >
            Signup
          </Button>
        </>
      )}
      <DialogHelpers
        title={
          <h3 className="flex h-[7.6rem] items-center bg-primary-shade-500 px-24 text-[3.2rem] text-secondary">
            Aca<span className="text-primary-shade-200">Demy</span>
          </h3>
        }
        open={isOpen}
        setOpen={setIsOpen}
        noPadding
        size="small"
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
