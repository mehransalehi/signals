import Link from 'next/link'
import { checkUser } from '@/app/actions/userActions'

export default async function Navbar() {
    const isLogged = await checkUser();
    return <div className="navbar bg-base-100 shadow-xl">
        <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl">Signals</Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                {!isLogged ? (
                    <>
                        <li><Link href="/signin">Sign In</Link></li>
                        <li><Link href="/signup">Sign Up</Link></li>
                    </>
                ) : (
                    <li><Link href="/dashboard">Dashboard</Link></li>
                )}
            </ul>
        </div>
    </div>
}