import React from 'react'
import { useNavigate } from "react-router-dom";


const Footer = () => {
    const navigate = useNavigate(); 

    return (
        <div>
            <div>
                <button onClick={() => {}}>חב"ד</button>
                <button onClick={() => {}}>מקווה</button>
                <button onClick={() => {navigate('/home')}}>ראשי</button>
                <button onClick={() => {navigate('/daniel')}}>דניאל</button>
                <button onClick={() => {}}>תימנים</button>
            </div>
        </div>
    )
}

export default Footer;
