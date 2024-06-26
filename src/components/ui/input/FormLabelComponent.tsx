/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormReturn } from 'react-hook-form'
import { FormField, FormItem, FormLabel, FormMessage } from '@/components/Form'
import { Input } from '.'

export function FormLabelComponent({
  form,
  label,
  placeholder = '',
  name,
  prefix,
  suffix,
  type,
  handlerClick,
}: {
  form: UseFormReturn | undefined | any
  label?: string
  placeholder?: string
  name: string
  prefix?: JSX.Element
  suffix?: JSX.Element
  type?: 'text' | 'number' | 'password'
  handlerClick?: () => void
}) {
  return (
    <FormField
      control={form?.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col gap-y-8 text-[2rem] text-black">
          <FormLabel>{label}</FormLabel>
          <Input
            {...field}
            className="bg-white"
            type={type}
            placeholder={placeholder}
            value={field.value}
            prefix={prefix}
            suffix={suffix}
            handlerClick={handlerClick}
          />
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
