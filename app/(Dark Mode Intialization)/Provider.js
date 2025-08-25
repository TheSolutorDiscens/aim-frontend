"use client";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

const Provider = ({ children }) => {
    const [Mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, []);

    if (!Mounted) {
        return <>{children}</>
    };

    return (
        <ThemeProvider enableSystem={true} attribute="class">
            {children}
        </ThemeProvider>
    )
}

export default Provider;