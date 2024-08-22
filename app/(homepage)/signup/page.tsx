import { FaRegUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";

export default function Signin() {
    return <main className="flex justify-center">
        <div className="card bg-base-100 w-full md:w-96 shadow-xl">
            <div className="card-body ">
                <div className="card-title justify-center mb-6">Sign Up</div>
                <form action="">
                    <label className="input input-bordered flex items-center gap-2 mb-4">
                        <FaRegUser />
                        <input type="text" className="grow" placeholder="Email" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mb-4">
                        <FaKey />
                        <input type="password" className="grow" placeholder="Password" value="" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mb-4">
                        <FaKey />
                        <input type="password" className="grow" placeholder="Reenter Password" />
                    </label>
                    <button className="btn btn-secondary"> Login </button>
                </form>
            </div>
        </div>
    </main>
}