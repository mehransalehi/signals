'use client'
import Link from 'next/link'
import { GoSignIn } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import { UseUser } from '@/app/context/userContext';
import { useSplashScreen } from '@/app/context/splashScreenContext';
import { useRouter } from "next/navigation";

export default function Navbar() {
    const user = UseUser();
    const router = useRouter()
    const { setShowSplashScreen } = useSplashScreen()
    const handleDashboard = async () => {
        setShowSplashScreen(true);
        router.push('/dashboard');
        return false;
    }
    return <div className="navbar border-b border-[#79797a] text-base-100">
        <div className="flex-none">
            <Link href="/">
                <img src="/images/logo-light.svg" alt="Signals Logo" className='w-[100px]' />
            </Link>
        </div>
        <div className="flex-1 flex justify-center">
            <ul className="menu menu-horizontal px-1">
                <li><Link className='hover:link-neutral hover:bg-accent' href="/about">Home</Link></li>
                <li><Link className='hover:link-neutral hover:bg-accent' href="/about">Blog</Link></li>
                <li><Link className='hover:link-neutral hover:bg-accent' href="/about">Services</Link></li>
                <li><Link className='hover:link-neutral hover:bg-accent' href="/about">About</Link></li>
                <li><Link className='hover:link-neutral hover:bg-accent' href="/contact">Contact</Link></li>
            </ul>
        </div>
        <div className='flex-none'>
            <ul className="menu menu-horizontal px-1">
                {!user ? (
                    <>
                        <li><Link className='btn btn-sm me-3' href="/signin"><GoSignIn /> Sign In</Link></li>
                        <li><Link className='btn btn-sm' href="/signup"><CiUser /> Sign Up</Link></li>
                    </>
                ) : (
                    <li><Link className='btn btn-sm btn-accent' onClick={handleDashboard} href="/dashboard"><MdDashboard /> Dashboard</Link></li>
                )}
            </ul>
        </div>
    </div>
}