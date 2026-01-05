import React from 'react';
import Link from 'next/link';

export default function Footer() {
    const CurrentDate = new Date();

    return (
        <>
            <footer className="FOOTER dark:bg-black">
                <div className="COMPANY">
                    <h1><Link href="/" className="UNDERLINE dark:text-white">AIM!!!</Link> &copy; {CurrentDate.getUTCFullYear()}</h1>
                    <p>CREATED WITH <span className="text-red-600">&hearts;</span> BY COMPUTES!!!</p>
                </div>

                <div className="LINKS">
                    <div className="WRAP">
                        <h2>Product</h2>
                        <div className="LINK">
                            <Link href="/consultAI" className="UNDERLINE">
                                <h3 className="text-slate-600">AIM Diabetes Predicter</h3>
                            </Link>
                        </div>
                    </div>

                    <div className="WRAP">
                        <h2>Resources</h2>
                        <div className="LINK">
                            <Link href="/more" className="text-slate-600 UNDERLINE">More</Link>
                            <Link href="/yourReports" className="text-slate-600 UNDERLINE">History Of Your Reports!!!</Link>
                        </div>
                    </div>

                    <div className="WRAP">
                        <h2>Company</h2>
                        <div className="LINK">
                            <p>OWNED BY COMPUTES!!!</p>

                            <Link href="/about" className="text-slate-600 UNDERLINE">About</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}