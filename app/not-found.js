"use client";
import React from 'react';
import { useRouter } from 'next/navigation';


export default function notfound() {

    const router = useRouter();
    // router.prefetch();

    const NotFound = () => {
        console.error("404");
        console.error("THIS PAGE COULD NOT BE FOUND!!!");
    }

    NotFound();

    return (
        <>
            <div className='WRAP_BOX'>
                <h1 className="NOT-FOUND text-[10rem] dark:text-white" >404</h1>
                <h3 className="PAGE-LINE text-gray-600 dark:text-gray-500" >We Can't Found This Page!!!</h3>
                <button className="TRY" onClick={() => router.back()}>BACK TO PREVIOUS PAGE!!!</button>
            </div>
        </>
    )
}