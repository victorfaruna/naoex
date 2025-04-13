import React, { useEffect, useState } from "react";

const Countdown = ({
    timer = 0,
    labels = ["Days", "Hours", "Minutes", "Seconds"],
    visibleLabels = ["d", "h", "m"],
}) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        mins: 0,
        secs: 0,
    });
    const [expired, setExpired] = useState(false);

    useEffect(() => {
        const endTime = Date.now() + timer * 1000;

        const updateCountdown = () => {
            let total = Math.floor((endTime - Date.now()) / 1000);

            if (total <= 0) {
                setExpired(true);
                setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
                window.dispatchEvent(new CustomEvent("countDownFinished"));
                return;
            }

            const days = Math.floor(total / 86400);
            total %= 86400;
            const hours = Math.floor(total / 3600);
            total %= 3600;
            const mins = Math.floor(total / 60);
            const secs = total % 60;

            setTimeLeft({ days, hours, mins, secs });
        };

        updateCountdown(); // call immediately
        const intervalId = setInterval(updateCountdown, 1000);
        return () => clearInterval(intervalId);
    }, [timer]);

    const format = (n: number) => n.toString().padStart(2, "0");

    if (expired) {
        return <div className="countdown__timer">Time's up!</div>;
    }

    return (
        <div className="countdown__timer" aria-hidden="true">
            {(visibleLabels.includes("d") || timeLeft.days > 0) && (
                <span className="countdown__item">
                    <span className="countdown__value">{timeLeft.days}</span>
                    {/* <span className="countdown__label">{labels[0]}</span> */}
                </span>
            )}
            {(visibleLabels.includes("h") ||
                timeLeft.hours > 0 ||
                timeLeft.days > 0) && (
                <span className="countdown__item">
                    <span className="countdown__value">
                        {format(timeLeft.hours)}
                    </span>
                    {/* <span className="countdown__label">{labels[1]}</span> */}
                </span>
            )}
            {(visibleLabels.includes("m") ||
                timeLeft.mins > 0 ||
                timeLeft.hours > 0 ||
                timeLeft.days > 0) && (
                <span className="countdown__item">
                    <span className="countdown__value">
                        {format(timeLeft.mins)}
                    </span>
                    {/* <span className="countdown__label">{labels[2]}</span> */}
                </span>
            )}
            <span className="countdown__item">
                <span className="countdown__value">
                    {format(timeLeft.secs)}
                </span>
                {/* <span className="countdown__label">{labels[3]}</span> */}
            </span>
        </div>
    );
};

export default Countdown;
