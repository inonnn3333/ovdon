import React from 'react';

const Daniel = () => {
    return (
        <div>
            <h1>ניקיון דניאל</h1>
            {/* ליצור טבלה שבה רואים עמודה אחת שכתוב שם"תאריך", עמודה שכתוב שם "שעת התחלה" עמודה שכתוב שם "שעת סיום" עמודה שכתוב שם "סה"כ" */}
            <table>
                <tr>
                    <th>תאריך</th>
                    <th>שעת התחלה</th>
                    <th>שעת סיום</th>
                    <th>סה"כ</th>
                </tr>
                <tr>
                    <td>01/01/2021</td>
                    <td>08:00</td>
                    <td>12:00</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>02/01/2021</td>
                    <td>08:00</td>
                    <td>12:00</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>03/01/2021</td>
                    <td>08:00</td>
                    <td>12:00</td>
                    <td>4</td>
                </tr>
            </table>
        </div>
    )
}

export default Daniel;
