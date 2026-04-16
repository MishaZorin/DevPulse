import { useEffect, useState, useRef } from 'react'
import { useWidget } from './Context';


import './pomodoro.css'

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
    function deleteWidget(widget, event) {
        deleteWidgetFromDashboard(widget)
        console.log('work');


    }
    //     useEffect(() => {
    //         let target = document.getElementById('target')
    //         target.onmousedown = function (event) { // (1) отследить нажатие

    //             // (2) подготовить к перемещению:
    //             // разместить поверх остального содержимого и в абсолютных координатах
    //             target.style.position = 'absolute';
    //             target.style.zIndex = 1000;
    //             // переместим в body, чтобы мяч был точно не внутри position:relative

    //             // и установим абсолютно спозиционированный мяч под курсор

    //             moveAt(event.pageX, event.pageY);

    //             // передвинуть мяч под координаты курсора
    //             // и сдвинуть на половину ширины/высоты для центрирования
    //             function moveAt(pageX, pageY) {
    //                 target.style.left = pageX - target.offsetWidth / 2 + 'px';
    //                 target.style.top = pageY - target.offsetHeight / 2 + 'px';
    //             }

    //             function onMouseMove(event) {
    //                 moveAt(event.pageX, event.pageY);
    //             }


    //             document.addEventListener('mousemove', onMouseMove);
    //             target.onmouseup = function () {
    //                 document.removeEventListener('mousemove', onMouseMove);
    //                 target.onmouseup = null;
    //             };

    //         };
    //     }, [])
    //     function w(event) {
    //         event.stopPropagation()
    // console.log('w');

    //     }


    return (
        <>
            <div className='pomodoro-container' id='target'>
                {addedWidgets.map((widget, index) => (
                    <button onMouseDown={(event) => w(event)} onClick={(event) => deleteWidget(widget, event)} className='deleteButton'>Delete widget</button>
                ))}
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