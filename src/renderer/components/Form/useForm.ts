import { useRef } from 'react'
import { getFormInstance } from './Store'
import { IFormData, FormInstance } from './typing'

export default function useForm<FormData extends IFormData>(form: FormInstance<FormData>): [FormInstance<FormData>] {
  const formRef = useRef<FormInstance<FormData>>(form)
  if (!formRef.current) {
    form ? (formRef.current = form) : (formRef.current = getFormInstance<FormData>())
  }
  return [formRef.current]
}
