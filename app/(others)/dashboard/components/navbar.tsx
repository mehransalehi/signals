import Link from 'next/link'
import { CiUser } from "react-icons/ci";
import { checkUser } from '@/app/actions/userActions';

export default async function Navbar() {

    const user = await checkUser();
    return <div className="navbar bg-base-100 shadow z-30">
        <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl">Signals</Link>
        </div>
        <div className="flex-none">
            <p className='text-sm me-2'>{user && user.email}</p>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:text-accent">
                    <div className="rounded-full">
                        <CiUser className='' />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li>
                        <Link href="/dashboard">Profile</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/settings">Settings</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/logout">Log Out</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}