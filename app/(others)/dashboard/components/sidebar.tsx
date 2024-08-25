import Link from "next/link"
import { FaSignal } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaPencil } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";

export default function Sidebar() {
    return <aside className="flex-none w-1/4 min-h-full shadow-[2px_10px_5px_rgba(0,0,0,0.1)] bg-base-100">
        <ul className="menu pt-5 text-neutral [&_li:hover]:text-accent">
            <li>
                <Link className="" href="dashboard/signals"><FaSignal/>Signals</Link>
            </li>
            <li>
                <Link href="dashboard/watcher"><FaEye/>Watcher</Link>
            </li>
            <li>
                <Link href="dashboard/orders"><CiMoneyCheck1/>Orders</Link>
            </li>
            <li>
                <Link href="dashboard/logs"><FaPencil/>Logs</Link>
            </li>
            <li>
                <Link href="dashboard/settings"><IoMdSettings/>Settings</Link>
            </li>
        </ul>
    </aside>
}