"use client";
import { useEffect, useState } from "react";

export default function History() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://aim-backend-f6t9.onrender.com/history")
            .then(res => res.json())
            .then(setData);
    }, []);

    return (
        <main>
            <h1>Your Prediction History</h1>

            {data.map(item => (
                <div key={item.id} className="CARD">
                    <p>Date: {new Date(item.created_at).toLocaleString()}</p>
                    <p>Result: {item.prediction === 1 ? "Positive" : "Negative"}</p>
                    <p>Confidence: {item.confidence}%</p>
                </div>
            ))}
        </main>
    );
}
