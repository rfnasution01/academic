import { cva } from 'class-variance-authority'

const variant = {
  default: [
    'bg-white',
    'border-transparent',
    'text-black',
    'hover:bg-slate-300',
    'hover:border-button-outline-hover-border',
    'hover:text-button-outline-hover-text',
    'disabled:text-black',
    'border',
  ],
  'solid-primary': [
    'bg-primary',
    'border-primary',
    'text-white',
    'hover:bg-primary-shade-700',
    'hover:border-button-outline-hover-border',
    'hover:text-button-outline-hover-text',
    'disabled:text-black',
    'border',
  ],
  'outlined-primary': [
    'bg-transparent',
    'border-white',
    'text-white',
    'hover:bg-slate-300',
    'hover:border-button-outline-hover-border',
    'hover:text-black',
    'disabled:text-black',
    'border',
  ],
}

export type ButtonVariants = keyof typeof variant

export const buttonVariants = cva(
  'flex items-center justify-center gap-8 p-8 leading-medium transition-all ease-in disabled:cursor-not-allowed disabled:bg-slate-300  disabled:text-typography-disabled disabled:border-slate-300 disabled:shadow-disabled',
  {
    variants: {
      variant: variant,
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)
