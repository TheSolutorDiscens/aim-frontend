"use client";
import { useTheme } from "next-themes";
import { SunIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/24/solid";

const ThemeSwitcher = () => {
    const { systemTheme, theme, setTheme } = useTheme();

    const RenderThemeChanger = () => {
        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme === "dark") {
            return (
                <button className="flex items-center justify-center relative top-4 rounded-[35px] w-[40px] h-[40px] mr-7 transition hover:bg-gray-700">
                    <SunIcon
                        className="w-6 h-6 text-yellow-500"
                        role="button"
                        onClick={() => setTheme("light")}
                    />
                </button>
            )
        }

        else {
            return (
                <button className="flex items-center justify-center relative top-4 rounded-[35px] w-[40px] h-[40px] mr-7 transition hover:bg-gray-300">
                    <MoonIcon
                        className="w-6 h-6 text-gray-900"
                        role="button"
                        onClick={() => setTheme("dark")}
                    />
                </button>
            )
        };
    };

    return <>{RenderThemeChanger()}</>
}

export default ThemeSwitcher;