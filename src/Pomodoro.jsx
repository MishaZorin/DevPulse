import { useEffect, useState, useRef } from 'react'
import './pomodoro.css'

function Pomodoro() {
    const [timeLeft, setTimeLeft] = useState(1500)
    const timeRef = useRef(null)
    function startTimer() {
        // продолжала работать
        if (timeRef.current !== null) return;
       timeRef.current = setInterval(()=>{
        setTimeLeft((prev)=> {
            if(prev <= 0){
                clearInterval(timeRef.current)
                timeRef.current = null
                return 0
            }
            return prev - 1
        })
       },1000)

    }
    function stopTimer(){
        clearInterval(timeRef.current)
    }
    function resetTimer(){
        // setTimeLeft(1500)
        
    }

    return (
        <>
            <div className='pomodoro-container'>
                <div className="timer-display">
                    <span style={{color: '#00E5FF'}}>{String(Math.floor(timeLeft / 60)).padStart(2, "0")}</span>
                    <span style={{color: '#00E5FF'}}>:</span>
                    <span style={{color: '#00E5FF'}}>{String(timeLeft % 60).padStart(2, "0")}</span>
                </div>
                <div className="buttons-section" style={{display: 'flex', gap: '10px'}}>
                    <button onClick={() => startTimer()} className='buttonPomodoro'>Start</button>
                    <button onClick={()=> resetTimer()} className='buttonPomodoro'>Reset</button>
                    <button onClick={()=> stopTimer()} className='buttonPomodoro'>Stop</button>
                </div>
            </div>
        </>
    )
}

export default Pomodoro