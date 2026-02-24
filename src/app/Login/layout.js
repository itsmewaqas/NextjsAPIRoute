"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function layout({ children }) {

    const pathname = usePathname();

    return (
        <div>
            {pathname !== "/Login/LoginTeacher" ?
                <ul className="cNav">
                    <li><Link href={`/Login/LoginAdmin`}>Login Admin</Link></li>
                    <li><Link href={`/Login/LoginStudent`}>Login Student</Link></li>
                    <li><Link href={`/Login/LoginTeacher`}>Login Teacher</Link></li>
                </ul>
                : null}
            <div className="cBlock">
                {children}
            </div>
        </div>
    )
}