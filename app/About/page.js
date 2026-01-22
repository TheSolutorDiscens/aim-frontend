"use client";
import React from "react";
import { motion } from "framer-motion";
import { Ubuntu } from "next/font/google";

const UbuntuFont = Ubuntu({
    weight: "700",
    subsets: ["latin"],
});

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

export default function About() {
    return (
        <main className="min-h-screen text-black dark:text-white px-6 md:px-12 py-20">


            <motion.section
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto text-center"
            >
                <h1 className={`text-7xl md:text-8xl mb-6 ${UbuntuFont.className}`}>
                    AIM
                </h1>

                <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-10">
                    MADE MACHINES HUMANS CURE!!!
                </h2>

                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    AIM is a Machine Learning powered application that predicts whether a
                    person is suffering from Diabetes. We combine technology with
                    humanity to deliver early, reliable healthcare insights.
                </p>
            </motion.section>

            <section className="max-w-5xl mx-auto mt-32 space-y-16">
                {[
                    {
                        title: "The Problem",
                        text: "Millions suffer from undiagnosed conditions due to lack of early detection.",
                    },
                    {
                        title: "The Idea",
                        text: "Use machine learning to predict health risks before symptoms worsen.",
                    },
                    {
                        title: "The Solution",
                        text: "AIM — fast, accessible, data-driven medical predictions.",
                    },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="border-l-2 border-black dark:border-white pl-8"
                    >
                        <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-lg">
                            {item.text}
                        </p>
                    </motion.div>
                ))}
            </section>

            <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mt-32">
                {[
                    {
                        title: "Why AIM?",
                        text: "Empowering early detection to save lives through intelligent predictions.",
                    },
                    {
                        title: "How It Works",
                        text: "ML models analyze medical inputs and generate accurate outcomes.",
                    },
                    {
                        title: "Our Vision",
                        text: "Proactive, affordable, and inclusive healthcare for all.",
                    },
                ].map((card, i) => (
                    <motion.div
                        key={i}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="bg-white border border-black/10 rounded-2xl p-8 shadow-sm hover:shadow-md transition"
                    >
                        <h3 className="text-2xl font-semibold mb-4 dark:text-black">{card.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{card.text}</p>
                    </motion.div>
                ))}
            </section>

            <motion.section
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center mt-36"
            >
                <h3 className="text-4xl font-bold mb-6">Founder</h3>
                <p className="text-2xl font-medium tracking-wide mb-6">
                    UJJAWAL DEEP MAURYA
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    AIM was founded with a mission to unite artificial intelligence with
                    human compassion. The goal is simple — make early healthcare insights
                    accessible, accurate, and impactful.
                </p>
            </motion.section>

            <motion.section
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center mt-32 border-t border-black/10 dark:border-white/10 pt-16"
            >
                <h3 className="text-4xl font-bold mb-6">
                    Together We Can Cure
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    AIM is not just an application — it is a step toward a future where
                    machines and humans collaborate to save lives.
                </p>
            </motion.section>

        </main>
    );
}
