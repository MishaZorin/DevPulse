import { useEffect, useState, useRef } from 'react'
import './HabitTracker.css'

function HabitTracker() {
    const [inputValue, setInputValue] = useState('')
    const daysCount = 7;
    const grid = Array.from({ length: daysCount });
    const [habits, setHabits] = useState([])

    const addHabit = () => {
        if (inputValue.trim() !== '') {
            setHabits([
                ...habits,
                { text: inputValue, id: Date.now() }
            ]);
            setInputValue('');
        }
    };
    const clickOnDay = (event) => {
        event.target.classList.toggle('brickActive');


    };
    const handleMouseDown = (e) => {
    // 1. Не двигаем, если жмем на текст или кнопку
    if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'BUTTON') return;

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
            <div className="page" style={{ position: 'absolute', cursor: 'grab' }} onMouseDown={handleMouseDown}>
                <h1>Your Habit Tracker</h1>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <input type="text" placeholder='Enter your goal...' value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
                    <button onClick={addHabit}>Add</button>

                </div>

                <ul>
                    {habits.map((habit, index) => (
                        <div>
                            <li className="task-item">
                                <span>{habit.text}</span>

                            </li>

                            <div className="right-matrix">
                                <div className="matrix-grid">
                                    {grid.map((day, index) => (
                                        <div
                                            key={index}
                                            className='brick'
                                            onClick={(e) => clickOnDay(e)}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    ))}
                </ul>



            </div>
        </>
    )
}

export default HabitTracker