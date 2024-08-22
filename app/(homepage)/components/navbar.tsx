import Link from 'next/link'

export default function Navbar() {
    return <div className="navbar bg-base-100 shadow-xl">
        <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl">Signals</Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li><Link href="/about">ABOUT</Link></li>
                <li><Link href="/contact">CONTACT</Link></li>
                <li><Link href="/signin">SIGNIN</Link></li>
                <li><Link href="/signup">SIGNUP</Link></li>
            </ul>
        </div>
    </div>
}