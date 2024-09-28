'use client'
import { FaRegUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { createUser } from "@/app/actions/userActions";
import { useFormState } from 'react-dom';
import { SignUpFormError } from '@/types/interfaces'
import { useFormStatus } from "react-dom";
import { SubmitButton } from "../components/submit";

const initState: SignUpFormError = {
    mainError: '',
    passError: '',
    emailError: '',
};

export default function Signin() {
    const [state, formAction] = useFormState(createUser, initState);

    return <main className="flex justify-center">
        <div className="card bg-base-100 w-full md:w-96 shadow-xl">
            <div className="card-body ">
                <div className="card-title justify-center mb-6">Sign Up</div>
                
                {
                    state.mainError && (
                        <span className="text-error text-center">{state.mainError}</span>
                    )
                }

                <form action={formAction}>
                    <label className="form-control w-full max-w-xs mb-4">
                        <label className={"input input-bordered flex items-center gap-2" + (state.emailError ? ' border-error' : '')}>
                            <FaKey />
                            <input name="email" type="email" className="grow" placeholder="Email" required />
                        </label>
                        {
                            state.emailError && (
                                <div className="label pb-0" >
                                    <span className="label-text-alt text-error">{state.emailError}</span>
                                </div>
                            )
                        }
                    </label>
                    <label className="form-control w-full max-w-xs mb-4">
                        <label className={"input input-bordered flex items-center gap-2" + (state.passError ? ' border-error' : '')}>
                            <FaKey />
                            <input name="password" type="password" className="grow" placeholder="Password" required />
                        </label>
                        {
                            state.passError && (
                                <div className="label pb-0" >
                                    <span className="label-text-alt text-error">{state.passError}</span>
                                </div>
                            )
                        }
                    </label>
                    <label className="form-control w-full max-w-xs mb-4">
                        <label className={"input input-bordered flex items-center gap-2" + (state.passError ? ' border-error' : '')}>
                            <FaKey />
                            <input name="confirm" type="password" className="grow" placeholder="Reenter Password" required />
                        </label>
                    </label>
                    <SubmitButton text="Register" isDisable={false}/>
                </form>
            </div>
        </div>
    </main>
}