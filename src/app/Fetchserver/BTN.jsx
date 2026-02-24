"use client"

export default function Page({ ip }) {
    return (
        <button onClick={() => alert(ip)}>View IP</button>
    )
}