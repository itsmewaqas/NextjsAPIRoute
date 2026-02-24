import { redirect } from 'next/navigation';

export default function Page() {
    return (
        redirect('/Login/LoginAdmin')
    );
}

export function generateMetadata() {
    return {
        title: 'Login Page Title',
        description: "Login Page Description",
    };
}