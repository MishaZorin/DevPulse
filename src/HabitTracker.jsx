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

    return (
        <>
            <div className="page">
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