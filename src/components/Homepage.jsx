import React from 'react'
import { useState, useEffect } from "react";

const Homepage = () => {

    const [startWork, setStartWork] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [totalWorkTime, setTotalWorkTime] = useState(0);
    const [selectedValue, setSelectedValue] = useState("");

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
        return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
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
            <select
                id="mySelect"
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
                >
                    <option value="" disabled>בחר...</option>
                    <option value="חב''ד">חב"ד</option>
                    <option value="מקוה">מקוה</option>
                    <option value="תימנים">תימנים</option>
                    <option value="דניאל">דניאל</option>
            </select>

            {selectedValue && <h3>{selectedValue}</h3>}

            <button onClick={startWorkFun} disabled={startWork !== null}
            className='text-xl font-bold mb-2'>התחלה</button>
            <button onClick={handlePause} disabled={totalWorkTime}>{isRunning ? "השהה" : "המשך"}</button>
            <button onClick={handleStop} disabled={totalWorkTime}>סיום</button>

            {startWork && <h3>זמן עבודה: {formatTime(elapsedTime)}</h3>}
            
            {totalWorkTime &&
                <p>סה"כ זמן עבודה ב{selectedValue}: {formatTime(totalWorkTime)}</p>}
                
            
        </div>
    )
};


export default Homepage;
