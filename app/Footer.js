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
                            <Link href="/ConsultAI" className="UNDERLINE">
                                <h3>Diabetes Predicter</h3>
                            </Link>
                        </div>
                    </div>

                    <div className="WRAP">
                        <h2>Resources</h2>
                        <div className="LINK">
                            <Link href="/More" className="UNDERLINE">More</Link>
                            <Link href="/YourReports" className="UNDERLINE">Your AIM-Reports!!!</Link>
                        </div>
                    </div>

                    <div className="WRAP">
                        <h2>Company</h2>
                        <div className="LINK">
                            <p>OWNED BY COMPUTES!!!</p>

                            <Link href="/About" className="UNDERLINE">About</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}