'use client'
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { FaRegUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";

export default function Signin() {
    const router = useRouter();

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get('email');
        const pass = formData.get('password');

        const res = await fetch('', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email, pass
            })
        })

        console.log(res);
        if(res.ok){
            //router.push('/dashboard');
        }else{
            //handle error
        }
    }
    return <main className="flex justify-center">
        <div className="card bg-base-100 w-full md:w-96 shadow-xl">
            <div className="card-body ">
                <div className="card-title justify-center mb-6">Login</div>
                <form onSubmit={handleSubmit}>
                    <label className="input input-bordered flex items-center gap-2 mb-4">
                        <FaRegUser />
                        <input name="email" type="text" className="grow" placeholder="Email" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mb-4">
                        <FaKey />
                        <input name="password" type="password" className="grow" value="password" />
                    </label>
                    <button className="btn btn-secondary"> Login </button>
                </form>
            </div>
        </div>
    </main>
}