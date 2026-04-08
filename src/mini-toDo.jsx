import { useState } from 'react'

import './mini-toDo.css'

function ToDo() {
    const [inputValue, setInputValue] = useState('')
    const [tasks, setTasks] = useState([
        {
            text: 'Погладить кота',
            isCompleted: false,
            id: 0
        },
        {
            text: 'Попить кофе',
            isCompleted: false,
            id: 1
        },
        {
            text: 'Сходить в зал',
            isCompleted: false,
            id: 2
        }
    ])

    const addTask = () => {
        if (inputValue.trim() !== '') {
            setTasks([
                ...tasks,
                { text: inputValue, isCompleted: false, id: Date.now() }
            ]);
            setInputValue('');
        }
    };






    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };


    return (
        <>
            <div className="todo">
             
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder='3 задачи на сейчас!'
                            value={inputValue}
                            onChange={(event) => setInputValue(event.target.value)}
                        />
                        <button onClick={addTask}className='add'>Добавить!</button>
                    </div>

                    <ul>
                        {tasks.map((task, index) => (
                            <li key={task.id} className="task-item">
                                <span>{task.text}</span>
                                <button className="delete" onClick={() => deleteTask(task.id)}>
                                    ❌
                                </button>
                            </li>
                        ))}
                    </ul>
               
            </div>

        </>
    )
}

export default ToDo
