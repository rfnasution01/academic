import zod from 'zod'

export const loginSchema = zod.object({
  username: zod.string({
    required_error: 'Username harus di isi',
    invalid_type_error: 'Format username tidak valid',
  }),
  email: zod
    .string()
    .nonempty({ message: 'Email harus di isi' })
    .email({ message: 'Format email tidak valid' })
    .refine((value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), {
      message: 'Format email tidak valid',
    })
    .optional(),
  role: zod
    .string({
      required_error: 'Role harus di isi',
      invalid_type_error: 'Format role tidak valid',
    })
    .optional(),
  password: zod
    .string({
      required_error: 'Password harus di isi',
      invalid_type_error:
        'Format password tidak valid, terdiri dari kombinasi huruf, angka, dan minimal 8 karakter',
    })
    .refine(
      (value) => {
        // Validasi bahwa password harus terdiri dari kombinasi huruf dan angka dan minimal 8 karakter
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)
      },
      {
        message:
          'Password harus terdiri dari kombinasi huruf dan angka, minimal 8 karakter',
      },
    ),
})
