'use client'

import Link from "next/link";
import { logoutUser } from '@/app/actions/userActions';
import { useRouter } from "next/navigation";
import { useSplashScreen } from "@/app/context/splashScreenContext";

export default function Logout() {
    const router = useRouter();
    const { setShowSplashScreen } = useSplashScreen();
    const handleLogout = async () => {
        setShowSplashScreen(true);
        const res = await logoutUser();
        if (res) {
            router.push('/');
        } else {
            router.push('/signin');
        }
    }
    return (
        <Link href="#" onClick={handleLogout}>Log Out</Link>
    );
}