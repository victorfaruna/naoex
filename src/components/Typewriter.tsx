import React, { useEffect, useRef, useState } from "react";

interface TypewriterProps {
    toRotate?: string[];
    period?: number; // Pause period when a word is fully typed
}

const Typewriter: React.FC<TypewriterProps> = ({
    toRotate = ["Real Estate", "Fine Art", "Collectibles"],
    period = 1000, // Reduced pause time – adjust as needed
}) => {
    // Using refs to always refer to latest values in the tick function.
    const textRef = useRef("");
    const isDeletingRef = useRef(false);
    const loopNumRef = useRef(0);

    // Dummy state to force re-render when textRef changes.
    const [, setTickCount] = useState(0);

    // Ref for the timeout ID.
    const timeoutRef = useRef<number | null>(null);

    const tick = () => {
        const i = loopNumRef.current % toRotate.length;
        const fullTxt = toRotate[i];

        let updatedText: string;
        if (isDeletingRef.current) {
            updatedText = fullTxt.substring(0, textRef.current.length - 1);
        } else {
            updatedText = fullTxt.substring(0, textRef.current.length + 1);
        }
        textRef.current = updatedText;
        // Force a re-render.
        setTickCount((count) => count + 1);

        // Base typing speed; adjust the randomness as needed.
        let delta = 200 - Math.random() * 50;
        if (isDeletingRef.current) {
            delta /= 2; // Deleting is a bit faster.
        }

        // When full text is typed, pause briefly before deleting.
        if (!isDeletingRef.current && updatedText === fullTxt) {
            delta = period;
            timeoutRef.current = window.setTimeout(() => {
                isDeletingRef.current = true;
                tick();
            }, delta);
            return;
        }

        // When deletion is complete, move to next word.
        if (isDeletingRef.current && updatedText === "") {
            isDeletingRef.current = false;
            loopNumRef.current += 1;
            delta = 100; // Short pause before typing the next word.
        }

        timeoutRef.current = window.setTimeout(tick, delta);
    };

    useEffect(() => {
        timeoutRef.current = window.setTimeout(
            () => tick(),
            200 - Math.random() * 50
        );
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <h1 className="title typewrite">
            Diversify Your Portfolio, Own a Piece of{" "}
            <span className="wrap">{textRef.current}</span>
        </h1>
    );
};

export default Typewriter;
