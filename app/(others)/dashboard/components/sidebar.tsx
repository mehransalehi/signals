'use client'
import Link from "next/link"
import { FaSignal } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaPencil } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { MdDashboard } from "react-icons/md";

import { useSplashScreen } from '@/app/context/splashScreenContext';
import { useRouter } from "next/navigation";


export default function Sidebar() {
    const router = useRouter()
    const { setShowSplashScreen } = useSplashScreen()
    const handleLinks = (path:string)=>{
        setShowSplashScreen(true);
        router.push('/'+path);
        return false;
    }
    return <aside className="flex-none w-1/4 min-h-full shadow-[2px_10px_5px_rgba(0,0,0,0.1)] bg-base-100 max-w-60">
        <ul className="menu pt-5 text-neutral [&_li:hover]:text-accent">
            <li>
                <Link href="/dashboard"><MdDashboard/>Dashboard</Link>
            </li>
            <li>
                <Link className="" href="/dashboard/signals"><FaSignal/>Signals</Link>
            </li>
            <li>
                <Link href="/dashboard/watcher"><FaEye/>Watcher</Link>
            </li>
            <li>
                <Link href="/dashboard/orders"><CiMoneyCheck1/>Orders</Link>
            </li>
            <li>
                <Link href="/dashboard/logs"><FaPencil/>Logs</Link>
            </li>
            <li>
                <Link href="/dashboard/settings"><IoMdSettings/>Settings</Link>
            </li>
        </ul>
    </aside>
}