import { Button } from '@/components/Button'

export function ButtonGroupMobile() {
  return (
    <div className="flex w-full flex-col gap-y-32">
      <Button variant="outlined-primary" classes="text-[1.8rem]">
        Login
      </Button>
      <Button variant="outlined" classes="text-[1.8rem]">
        Signup
      </Button>
    </div>
  )
}
