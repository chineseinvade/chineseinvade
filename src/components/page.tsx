import { cn } from "../lib/utils";

export function Centering({
    className,
    ...args
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "min-h-screen min-w-full flex items-center justify-center flex-col gap-6 p-8",
                className,
            )}
            {...args}
        />
    );
}
