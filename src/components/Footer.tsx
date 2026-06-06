import { Centering } from "./page";

export default function Footer() {
    return (
        <footer>
            <Centering className="bg-black text-2xl text-white">
                <p className="text-sm text-gray-500 italic">
                    Notice: This is for public awareness.
                </p>
                <p>
                    Help us to improve this project by{" "}
                    <span className="font-bold">
                        Creating an issue or Pull Request
                    </span>{" "}
                    on{" "}
                    <a
                        href="https://github.com/chineseinvade/chineseinvade"
                        className="text-orange-400"
                    >
                        GitHub
                    </a>
                </p>
            </Centering>
        </footer>
    );
}
