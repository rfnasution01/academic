import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { loginSchema } from '@/libs/consts/schema'
import { Form } from '@/components/Form'
import { Dispatch, SetStateAction } from 'react'
import { Button } from '@/components/Button'
import { Send, Trash } from 'lucide-react'

export function FormLogin({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}) {
  const form = useForm<zod.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {},
  })

  async function onSubmit(values: zod.infer<typeof loginSchema>) {
    try {
      console.log(values)
    } catch (error) {
      console.log(error)
    } finally {
      setIsOpen(false)
    }
  }

  return (
    <Form {...form}>
      <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="m-24 flex flex-col gap-12">
          <div className="mt-16 flex flex-row justify-end gap-32">
            <Button type="reset" classes="px-32">
              <Trash size={18} />
              Batal
            </Button>
            <Button variant="solid-primary" type="submit" classes="px-32">
              <Send size={18} />
              Simpan
            </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}
