import Link from "next/link";

export default function Header() {
    return (
        <header>
            <a href="javascript:;" className="logo">Nextjs API Route</a>
            <ul>
                <li><Link href={`/Home`}>Home</Link></li>
                <li><Link href={`/About`}>About</Link></li>
                <li><Link href={`/Services`}>Services</Link></li>
                <li><Link href={`/Fetchclient`}>Fetchclient</Link></li>
                <li><Link href={`/Fetchserver`}>Fetchserver</Link></li>
                <li><Link href={`/Users`}>Users</Link></li>
                <li><Link href={`/Study`}>Study</Link></li>
                <li><Link href={`/Ssg`}>Ssg</Link></li>
                <li><Link href={`/Student`}>Student</Link></li>
                <li><Link href={`/Login`}>Login</Link></li>
                <li><Link href={`/Contact`}>Contact</Link></li>
            </ul>
        </header>
    );
}


