import { zodResolver } from '@hookform/resolvers/zod'
import { useForm as useReactHookForm } from 'react-hook-form'
import type { ZodType } from 'zod'

export function useForm<T extends ZodType<any, any>>(schema: T) {
  return useReactHookForm({
    resolver: zodResolver(schema)
  })
} 