import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export default function Header() {
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsTop(window.scrollY < window.innerHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={cn(
                "fixed left-0 w-full h-20 text-white mix-blend-difference items-center justify-center transition-all ease-out",
                isTop ? "-top-20" : "top-0",
            )}
        >
            <div className="w-full h-full flex md:justify-between justify-center items-center">
                <span className="font-extrabold text-2xl text-center md:w-80 w-fit">
                    Chinese<span className="text-red-500">Invade</span>
                </span>
            </div>
        </div>
    );
}
