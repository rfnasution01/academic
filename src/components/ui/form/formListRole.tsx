import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/Form'
import { DataRole } from '@/libs/consts/dummy/dataRole'
import { cn } from '@/libs/helpers/utils'
import { UseFormReturn } from 'react-hook-form'
import Select from 'react-select'

interface inputProps {
  name: string
  placeholder: string
  headerLabel: string
  isDisabled?: boolean
  className?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form?: UseFormReturn | any | undefined
}

export function FormListRole({
  name,
  headerLabel,
  placeholder,
  isDisabled,
  form,
  className,
}: inputProps) {
  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => {
        return (
          <FormItem className={cn('flex flex-col space-y-2', className)}>
            <FormLabel className={'pt-2'}>{headerLabel}</FormLabel>
            <FormControl>
              <Select
                {...field}
                className={'text-sm'}
                options={DataRole}
                value={DataRole.filter((item) => item.value === field.value)[0]}
                placeholder={placeholder ?? 'Input here'}
                onChange={(optionSelected) => {
                  field.onChange(optionSelected?.value)
                  form.setValue('role', optionSelected?.value)
                }}
                isDisabled={isDisabled}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}
