import { useEffect, useState, useRef } from 'react'
import { useWidget } from './Context';


import './pomodoro.css'
import { add } from 'firebase/firestore/lite/pipelines';

function Pomodoro() {
    const { addedWidgets, deleteWidgetFromDashboard } = useWidget();
    const [time, setTime] = useState(0)
    const timeRef = useRef(null)
    function startTimer() {
        // продолжала работать
        if (timeRef.current) return;
        timeRef.current = setInterval(() => {
            setTime((prev) => {

                return prev + 1
            })
        }, 1000)

    }
    function stopTimer() {
        clearInterval(timeRef.current)
    }
    function resetTimer() {
        setTime(0)
        clearInterval(timeRef.current);
        timeRef.current = null;


    }
    const handleMouseDown = (e) => {
        // 1. Не двигаем, если жмем на текст или кнопку


        const el = e.currentTarget; // Берем именно тот блок, на который нажали

        // 2. Считаем сдвиг, чтобы не прыгало
        const shiftX = e.clientX - el.getBoundingClientRect().left;
        const shiftY = e.clientY - el.getBoundingClientRect().top;

        function moveAt(pageX, pageY) {
            el.style.left = pageX - shiftX + 'px';
            el.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        // 3. Вешаем события на документ
        document.addEventListener('mousemove', onMouseMove);

        document.onmouseup = function () {
            document.removeEventListener('mousemove', onMouseMove);
            document.onmouseup = null;
        };
    };


    return (
        <>
            <div className='pomodoro-container' style={{ position: 'absolute', cursor: 'grab' }} onMouseDown={handleMouseDown}>
                {/* {addedWidgets.map((widget) => (
  <button key={widget.id} onClick={() => deleteWidgetFromDashboard(widget.id)}>
    Удалить
  </button>
))} */}

                <div className="timer-display">
                    <span style={{ color: '#00E5FF' }}>{String(Math.floor(time / 60)).padStart(2, "0")}</span>
                    <span style={{ color: '#00E5FF' }}>:</span>
                    <span style={{ color: '#00E5FF' }}>{String(time % 60).padStart(2, "0")}</span>
                </div>
                <div className="buttons-section" style={{ display: 'flex', gap: '10px' }}>
                    <button onClick={() => startTimer()} className='buttonPomodoro'>Start</button>
                    <button onClick={() => resetTimer()} className='buttonPomodoro'>Reset</button>
                    <button onClick={() => stopTimer()} className='buttonPomodoro'>Stop</button>
                </div>
            </div>
        </>
    )
}

export default Pomodoro