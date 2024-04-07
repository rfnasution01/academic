import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { loginSchema } from '@/libs/consts/schema'
import { Form } from '@/components/Form'
import { Dispatch, SetStateAction, useState } from 'react'
import { Button } from '@/components/Button'
import { Eye, EyeOff, Lock, Save, UserCircle } from 'lucide-react'
import { FormLabelComponent } from '@/components/ui/input'
import { Checkbox } from '@/components/Checkbox'
import { Link } from 'react-router-dom'

export function FormSignUp({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}) {
  const [isShow, setIsShow] = useState<boolean>(false)
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
        <div className="flex flex-col gap-32 text-black">
          <h1 className="text-center font-roboto text-[3rem] font-bold ">
            Signup
          </h1>
          <FormLabelComponent
            form={form}
            label="Username"
            placeholder="Write your username"
            name="username"
            prefix={<UserCircle size={16} />}
            type="text"
          />
          <FormLabelComponent
            form={form}
            label="Password"
            placeholder="Write your password"
            name="password"
            prefix={<Lock size={16} />}
            suffix={isShow ? <Eye size={16} /> : <EyeOff size={16} />}
            handlerClick={() => setIsShow(!isShow)}
            type={!isShow ? 'password' : 'text'}
          />
          <div className="flex items-center justify-between">
            <Checkbox
              label="Remember me"
              containerClasses="text-black font-[2rem]"
              direction="row"
            />
            <Link to="forgot-password" className="hover:text-primary-shade-500">
              Forgot Passowrd?
            </Link>
          </div>

          <div className="flex flex-col gap-y-12">
            <Button variant="solid-primary" type="submit" classes="py-12">
              <Save size={12} />
              Simpan
            </Button>
            <span className="text-center">or sign up with:</span>
          </div>

          <Button variant="solid-primary" type="submit" classes="py-12">
            <img src="/icon/Google.svg" alt="Icon Google" />
            Sign Up with Google
          </Button>

          <h5 className="mt-32 text-center">
            Have an account?{' '}
            <span className="text-primary-shade-500">Login</span>
          </h5>
        </div>
      </form>
    </Form>
  )
}
