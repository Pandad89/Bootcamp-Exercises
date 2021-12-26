import React, { useState } from 'react'

function Time() {
    const [seconds, setSeconds] = useState(null);
    const [minutes, setMinutes] = useState(null);
    const [hours, setHours] = useState(null);

    const numChange = (event) => {
        if (event.target.id === 'seconds'){
            setSeconds(event.target.value)
            setMinutes((event.target.value) / 60)
            setHours(event.target.value  / 3600)
        }else if (event.target.id === 'minutes'){
            setSeconds(event.target.value * 60)
            setMinutes(event.target.value)
            setHours(event.target.value / 60)
        }else if (event.target.id === 'hours'){
            setSeconds(event.target.value * 3600)
            setMinutes(event.target.value * 60)
            setHours(event.target.value)
        }
    }

    return (
        <div>
            <label>Seconds</label>
            <input id='seconds' value={seconds} onChange={(event) => numChange(event)}></input>
            <label>Minutes</label>
            <input id='minutes' value={minutes} onChange={(event) => numChange(event)}></input>
            <label>Hours</label>
            <input id='hours' value={hours} onChange={(event) => numChange(event)}></input>
        </div>
    );
};

export default Time;