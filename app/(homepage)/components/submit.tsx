'use client'
 
import { useFormStatus } from 'react-dom'
 
export function SubmitButton({text} : {text: string}) {
  const { pending } = useFormStatus()
 
  return (
    <button className="btn btn-secondary" disabled={pending}> {pending ? 'Loading' : text} </button>
  )
}