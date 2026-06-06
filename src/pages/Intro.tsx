import { Centering } from "@components/page";

export default function Intro() {
    return (
        <>
            <Centering className="bg-black text-white">
                <div>
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
                        You might asking why?
                    </h1>
                    <p className="leading-7 not-first:mt-6 text-2xl max-w-3xl">
                        Chinese produce (might be) high value, cheap, and easy
                        to get products. Does it really{" "}
                        <span className="text-red-500">matter</span>? What
                        nonsense am I talking about?
                    </p>
                </div>
            </Centering>
            <Centering>
                <div>
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
                        Here's WHY
                    </h1>
                    <p className="leading-7 not-first:mt-6 text-2xl max-w-3xl">
                        You're{" "}
                        <span className="text-red-500 font-extrabold">
                            risking
                        </span>{" "}
                        your self with Chinese Government. Chinese corporation
                        can collect your life data then send them to their evil
                        government.
                    </p>
                </div>
            </Centering>
        </>
    );
}
