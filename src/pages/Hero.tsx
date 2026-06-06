import { Centering } from "@components/page";

export default function Hero() {
    return (
        <Centering>
            <div className="lg:max-w-4/5 lg:p-8">
                <h1 className="text-left lg:text-9xl md:text-8xl sm:text-7xl text-6xl font-extrabold tracking-tight text-balance">
                    Chinese is <span className="text-red-500">Invading</span>
                </h1>

                <p className="font-mono mt-5">
                    BUT... You might not even notice...
                </p>
            </div>
        </Centering>
    );
}
