'use client'
import { useRouter } from "next/navigation";
import { FaRegUser, FaKey } from "react-icons/fa";
import { useFormState, useFormStatus } from 'react-dom';
import { SignInFormError } from "@/types/interfaces";
import { loginUser } from "@/app/actions/userActions";
import { SubmitButton } from "../components/submit";

const initState: SignInFormError = {
    res: false,
    message: ''
}
export default function Signin() {
    const [state, formAction] = useFormState(loginUser, initState);
    const router = useRouter();
    if(state.res){
        router.push('/dashboard');
    }
    return <main className="flex justify-center">
        <div className="card bg-base-100 w-full md:w-96 shadow-xl">
            <div className="card-body ">
                <div className="card-title justify-center mb-6">Login</div>

                {
                    !state.res && (
                        <span className="text-error text-center">{state.message}</span>
                    )
                }
                <form action={formAction}>
                    <label className="input input-bordered flex items-center gap-2 mb-4">
                        <FaRegUser />
                        <input name="email" type="text" className="grow" placeholder="Email" defaultValue="email@email.com" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mb-4">
                        <FaKey />
                        <input name="password" type="password" className="grow" defaultValue="password" />
                    </label>
                    <SubmitButton text="login" />
                </form>
            </div>
        </div>
    </main>
}