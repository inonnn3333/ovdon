import React from 'react'
import { useState, useEffect } from "react";

const Homepage = () => {

    const [startWork, setStartWork] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [totalWorkTime, setTotalWorkTime] = useState(0);

    const startWorkFun = () => {
        setStartWork(new Date());
        setElapsedTime(0);
        setIsRunning(true);
        setTotalWorkTime(null);
    };

    const handlePause = () => {
        setIsRunning(!isRunning);
    };

    const handleStop = () => {
        setIsRunning(false);
        setTotalWorkTime(elapsedTime);
        setStartWork(null);
    }

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs} `;
    };    
    useEffect(() => {
        let workTime;
        if (isRunning) {
            workTime = setInterval(() => {
                setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
            }, 1000);
        }
        return () => clearInterval(workTime);
    }, [isRunning]);

    return (
        <div>
            <button onClick={startWorkFun} disabled={startWork !== null}>התחלה</button>
            <button onClick={handlePause}>{isRunning ? "השהה" : "המשך"}</button>
            <button onClick={handleStop}>סיום</button>

            {startWork && <h1>זמן עבודה: {formatTime(elapsedTime)}</h1>}
            {totalWorkTime && <h1>סה"כ זמן עבודה: {formatTime(totalWorkTime)}</h1>}
        </div>
    )
};


export default Homepage;
