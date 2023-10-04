"use client";

import { useState } from "react";

export default function Home() {
    const fetchPOST = async () => {
        const res = await fetch("api/notifications", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ test: "Este es el vendito test" }),
        });
    };

    const fetchGET = async () => {
        const res = await (
            await fetch("api/notifications", {
                method: "GET",
            })
        ).json();
        setData(JSON.stringify(res));
    };
    const [data, setData] = useState("Apretar GET");

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <div className="flex gap-7 p-4">
                <button onClick={fetchPOST}>POST</button>
                <button onClick={fetchGET}>GET</button>
            </div>
            <div className="max-w-5xl w-full flex-col gap-4 font-mono lg:flex">
                <h2>ULTIMA NOTI RECIBIDA</h2>
                <p>{data}</p>
            </div>
        </main>
    );
}
