import React, { useEffect, useState } from 'react'
import './DigitalClock.css'

function DigitalClock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timeID = setInterval(() => {
            console.log("Clock ticking");
            setTime(new Date.toLocaleTimeString)
        }, 1000);

        return () => {
            clearInterval(timeID);
            console.log("Clock stopped");
        }
    }, [])

    return (
        <div className="clock-container">
            <div className="click-display">
                {time}
            </div>
        </div>
    )
}

export default DigitalClock