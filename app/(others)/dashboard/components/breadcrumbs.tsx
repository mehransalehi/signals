'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function BreadCrumbs() {
    const pathname = usePathname();
    let pathArray = pathname.trim().split('/');
    pathArray.splice(0,1);
    return <div className="breadcrumbs text-sm mb-4 bg-base-100 p-2 rounded-lg text-xs shadow-sm capitalize">
        <ul>
            <li><Link href="/">Home Page</Link></li>
            {pathArray.map((path,index)=>{
                const mainPath = '/' + pathArray.slice(0,index+1).join('/');
                const isLast = pathArray.length -1 == index;
                const label = decodeURIComponent(path);
                return <>
                    {isLast ? (
                        <li key={index}><span>{label}</span></li>
                    ) : (
                        <li key={index}><Link href={mainPath}>{label}</Link></li>
                    )}
                </>
            })}
        </ul>
    </div>
}