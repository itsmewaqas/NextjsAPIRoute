import Link from "next/link";

export default function Page() {

    return (
        <div>
            <h1>Login Teacher Page</h1>
            <Link href={`/Login`}>Back</Link>
        </div>
    );
}



export function generateMetadata() {
    return {
        title: 'Login Teacher Page Title',
        description: "Login Teacher Page Description",
    };
}