import Link from 'next/link'

export default function Navbar() {
    return <nav>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/dashboard/signals">Signals</Link></li>
            <li><Link href="/dashboard/watcher">Watcher</Link></li>
            <li><Link href="/dashboard/orders">Orders</Link></li>
        </ul>
    </nav>
}