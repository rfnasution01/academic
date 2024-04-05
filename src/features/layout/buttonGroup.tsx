import { Button } from '@/components/Button'

export function ButtonGroup() {
  return (
    <div className="flex items-center gap-x-32">
      <Button variant="outlined" classes="text-[1.8rem] min-w-[11rem]">
        Login
      </Button>
      <Button variant="solid" classes="text-[1.8rem] min-w-[11rem]">
        Signup
      </Button>
    </div>
  )
}
