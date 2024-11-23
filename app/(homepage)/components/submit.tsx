'use client'

import { useFormStatus } from 'react-dom'

export function SubmitButton({ text, isDisable, classText = '' }: { text: string, isDisable: boolean, classText?: string }) {
  const { pending } = useFormStatus()

  return (
    <button className={"btn btn-primary" + classText} disabled={pending || isDisable}> {pending ? 'Loading' : text} </button>
  )
}