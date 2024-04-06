import { Button } from '@/components/Button'

export function ButtonGroupMobile() {
  return (
    <div className="flex w-full flex-col gap-y-24">
      <Button variant="solid-primary" classes="text-[2rem]">
        Login
      </Button>
      <Button classes="text-[2rem]">Signup</Button>
    </div>
  )
}
