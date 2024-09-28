'use client'
 
import { useFormStatus } from 'react-dom'
 
export function SubmitButton({text,isDisable} : {text: string,isDisable:boolean}) {
  const { pending } = useFormStatus()
 
  return (
    <button className="btn btn-secondary" disabled={pending || isDisable}> {pending ? 'Loading' : text} </button>
  )
}