import React from "react";
import { Ubuntu } from "next/font/google";

const UbuntuFont = Ubuntu({
    variable: "--font-Ubuntu",
    weight: "700",
    preload: true,
    style: "normal",
    subsets: ["latin"],
});


export default function About() {

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 text-black dark:text-white flex flex-col items-center px-6 md:px-12 py-20 transition-colors duration-500">

            <div className="max-w-5xl text-center">
                <h1 className={`text-7xl ${UbuntuFont.variable} antialiased md:text-8xl leading-tight mb-6 tracking-tight`}>
                    AIM
                </h1>
                <h2 className="text-2xl md:text-3xl font-light text-gray-600 dark:text-gray-300 mb-10">
                    MADE MACHINES HUMANS CURE!!!
                </h2>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    <span className="font-semibold">AIM!!!</span> is a Machine Learning powered application
                    that predicts whether a person is suffering from
                    <span className="font-medium"> Diabetes</span> or not. We blend the precision of
                    technology with the compassion of humanity to deliver early,
                    accessible, and accurate health insights.
                </p>
            </div>


            <div className="max-w-6xl grid md:grid-cols-3 gap-12 mt-24 cursor-pointer">
                <div className="flex flex-col text-left bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-md hover:shadow-xl transition">
                    <h3 className="text-2xl font-semibold mb-4">Why AIM?</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Empowering people with proactive tools to predict health conditions
                        early—giving them the chance to act before it’s too late.
                    </p>
                </div>

                <div className="flex flex-col text-left cursor-pointer bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-md hover:shadow-xl transition">
                    <h3 className="text-2xl font-semibold mb-4">How It Works</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        With advanced ML models trained on medical datasets, AIM analyzes
                        health data and delivers quick, reliable predictions with high
                        accuracy.
                    </p>
                </div>

                <div className="flex flex-col text-left cursor-pointer bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-md hover:shadow-xl transition">
                    <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        To reshape healthcare into a proactive, affordable, and inclusive
                        experience by uniting the intelligence of machines with human care.
                    </p>
                </div>
            </div>


            <div className="max-w-4xl text-center mt-32 border-t border-gray-200 dark:border-gray-800 pt-16">
                <h3 className="text-4xl font-bold mb-6">Together We Can Cure</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    AIM is not just an application—it’s a movement dedicated to building
                    a healthier future where technology and humanity collaborate to fight
                    disease and enhance lives.
                </p>
            </div>
        </div>
    );
}
