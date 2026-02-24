"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Event1() {
    const CallMe = () => {
        alert('click Event');
    }
    return (
        <div>
            <button onClick={CallMe}>Click Event</button>
        </div>
    )
}

export function Event2() {
    const [title, setTitle] = useState("waqas");
    const changeName = () => {
        setTitle(title == 'waqas' ? 'zuhaib' : 'waqas');
    }
    return (
        <div>
            <button onClick={changeName}>{title}</button>
        </div>
    )
}

export function Event3() {
    const router = useRouter();
    const navigate = () => {
        router.push('/Users')
    }
    return (
        <div>
            <button onClick={navigate}>Go</button>
        </div>
    )
}
