"use client";
import { useEffect, useMemo, useState } from "react";

export default function History() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [view, setView] = useState("cards");
    const [active, setActive] = useState(null);

    useEffect(() => {
        fetch("https://aim-backend-f6t9.onrender.com/history")
            .then((res) => res.json())
            .then((res) => {
                setData(res);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const exportCSV = () => {
        const headers = ["Date", "Prediction", "Confidence"];
        const rows = data.map((i) => [
            new Date(i.created_at).toLocaleString(),
            i.prediction === 1 ? "Positive" : "Negative",
            `${i.confidence}%`,
        ]);

        const csv = [headers, ...rows].map(r => r.join(",")).join("\n");
        const blob = new Blob([csv], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "history.csv";
        a.click();
        URL.revokeObjectURL(url);
    };

    const Skeleton = () => (
        <div className="rounded-2xl border border-black/10 p-6 animate-pulse">
            <div className="h-3 w-1/3 bg-black/10 rounded mb-4" />
            <div className="h-4 w-2/3 bg-black/10 rounded mb-3" />
            <div className="h-2 w-full bg-black/10 rounded" />
        </div>
    );

    return (
        <main className="min-h-screen bg-white px-6 py-14 text-black">
            <div className="max-w-6xl mx-auto">

                <header className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-semibold tracking-tight">History</h1>
                        <p className="text-sm text-gray-600 mt-2">
                            Your past AI predictions & confidence levels
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setView("cards")}
                            className={`px-4 py-2 text-sm border rounded-lg ${view === "cards" ? "bg-black text-white" : "border-black/20"}`}
                        >
                            Cards
                        </button>
                        <button
                            onClick={() => setView("table")}
                            className={`px-4 py-2 text-sm border rounded-lg ${view === "table" ? "bg-black text-white" : "border-black/20"}`}
                        >
                            Table
                        </button>
                        <button
                            onClick={exportCSV}
                            className="px-4 py-2 text-sm border border-black/20 rounded-lg hover:bg-black hover:text-white transition"
                        >
                            Export CSV
                        </button>
                    </div>
                </header>

                {loading && (
                    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[...Array(6)].map((_, i) => <Skeleton key={i} />)}
                    </section>
                )}

                {!loading && data.length === 0 && (
                    <p className="text-gray-500">No history found.</p>
                )}

                {!loading && view === "cards" && (
                    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {data.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => setActive(item)}
                                className="cursor-pointer rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                            >
                                <p className="text-xs text-gray-500 mb-3">
                                    {new Date(item.created_at).toLocaleString()}
                                </p>
                                <h2 className="text-lg font-medium mb-4">Prediction Result</h2>
                                <div className="flex justify-between items-center mb-5">
                                    <span className="px-3 py-1 rounded-full text-xs border border-black/30 bg-black/[0.04]">
                                        {item.prediction === 1 ? "Positive" : "Negative"}
                                    </span>
                                    <span className="text-sm text-gray-700">{item.confidence}%</span>
                                </div>
                                <div className="h-1 w-full bg-black/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-black" style={{ width: `${item.confidence}%` }} />
                                </div>
                            </div>
                        ))}
                    </section>
                )}

                {!loading && view === "table" && (
                    <div className="overflow-x-auto border border-black/10 rounded-xl">
                        <table className="w-full text-sm">
                            <thead className="bg-black/[0.03]">
                                <tr className="text-left">
                                    <th className="p-4">Date</th>
                                    <th className="p-4">Result</th>
                                    <th className="p-4">Confidence</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <tr
                                        key={item.id}
                                        onClick={() => setActive(item)}
                                        className="border-t border-black/10 cursor-pointer hover:bg-black/[0.02]"
                                    >
                                        <td className="p-4 text-gray-600">{new Date(item.created_at).toLocaleString()}</td>
                                        <td className="p-4">{item.prediction === 1 ? "Positive" : "Negative"}</td>
                                        <td className="p-4">{item.confidence}%</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {active && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6">
                        <h2 className="text-xl font-medium mb-4">Prediction Details</h2>
                        <p className="text-sm text-gray-600 mb-2">Date</p>
                        <p className="mb-4">{new Date(active.created_at).toLocaleString()}</p>
                        <p className="text-sm text-gray-600 mb-2">Result</p>
                        <p className="mb-4">{active.prediction === 1 ? "Positive" : "Negative"}</p>
                        <p className="text-sm text-gray-600 mb-2">Confidence</p>
                        <p className="mb-6">{active.confidence}%</p>
                        <button
                            onClick={() => setActive(null)}
                            className="w-full py-2 border border-black rounded-lg hover:bg-black hover:text-white transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}
