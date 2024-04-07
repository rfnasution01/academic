import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { loginSchema } from '@/libs/consts/schema'
import { Form } from '@/components/Form'
import { Dispatch, SetStateAction, useState } from 'react'
import { Button } from '@/components/Button'
import { Eye, EyeOff, Lock, Save, Send, UserCircle } from 'lucide-react'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { FormLabelComponent } from '@/components/ui/input'
import { FormListRole } from '@/components/ui/form'

export function FormLogin({
  setIsOpen,
  setIsLogin,
  isLogin,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>
  setIsLogin: Dispatch<SetStateAction<boolean>>
  isLogin?: boolean
}) {
  const [isShow, setIsShow] = useState<boolean>(false)
  const form = useForm<zod.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {},
  })

  const formWatch = form.watch()

  async function handleFormSignup() {
    const storedUsername = localStorage.getItem('username')
    if (storedUsername && storedUsername === formWatch.username) {
      toast.error(
        `Username already exists, please choose a different username.`,
        {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        },
      )
      return
    }

    localStorage.setItem('username', formWatch.username)
    localStorage.setItem('email', formWatch?.email ?? '')
    localStorage.setItem('role', formWatch?.role ?? '')
    localStorage.setItem('password', formWatch.password)
    toast.success(`Registrasi berhasil. Silahkan login!`, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    })
    setTimeout(() => {
      setIsOpen(false)
    }, 3000)
  }

  async function handleFormLogin() {
    const storedUsername = localStorage.getItem('username')
    const storedPassword = localStorage.getItem('password')

    if (
      formWatch?.username === storedUsername &&
      formWatch?.password === storedPassword
    ) {
      const token = btoa(formWatch?.username)
      localStorage.setItem('token', token)
      toast.success(`Login berhasil!`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
      setTimeout(() => {
        setIsOpen(false)
      }, 3000)
    } else {
      toast.error(`Username atau password salah`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
    }
  }

  return (
    <Form {...form}>
      <form
        className="w-full"
        onSubmit={form.handleSubmit(
          isLogin ? handleFormLogin : handleFormSignup,
        )}
      >
        <div className="flex flex-col gap-32 text-black">
          <h1 className="text-center font-roboto text-[3rem] font-bold ">
            {isLogin ? 'Login' : 'Signup'}
          </h1>

          <div className="flex flex-col gap-y-12">
            <FormLabelComponent
              form={form}
              label="Username"
              placeholder="Write your username"
              name="username"
              prefix={<UserCircle size={16} />}
              type="text"
            />
            {!isLogin && (
              <FormLabelComponent
                form={form}
                label="Email"
                placeholder="Write your email"
                name="email"
                prefix={<Lock size={16} />}
              />
            )}

            {!isLogin && (
              <FormListRole
                name="role"
                placeholder="Write your role"
                headerLabel="Role"
                form={form}
              />
            )}

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
          </div>

          <div className="flex flex-col gap-y-12">
            <Button variant="solid-primary" type="submit" classes="py-12">
              {isLogin ? <Send size={12} /> : <Save size={12} />}
              {isLogin ? 'Masuk' : 'Simpan'}
            </Button>
            <span className="text-center">
              or {isLogin ? 'login' : 'sign up'} with:
            </span>
          </div>

          <Button variant="solid-primary" type="submit" classes="py-12">
            <img src="/icon/Google.svg" alt="Icon Google" />
            {isLogin ? 'Login' : 'Sign Up'} with Google
          </Button>

          {isLogin ? (
            <h5 className="mt-32 text-center">
              Don't have an account?{' '}
              <span
                className="text-primary-shade-500 hover:cursor-pointer"
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </span>
            </h5>
          ) : (
            <h5 className="mt-32 text-center">
              Have an account?{' '}
              <span
                className="text-primary-shade-500 hover:cursor-pointer"
                onClick={() => setIsLogin(true)}
              >
                Login
              </span>
            </h5>
          )}
        </div>
      </form>
      <ToastContainer />
    </Form>
  )
}
