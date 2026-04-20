import { useState } from 'react'
import { useWidget } from './Context';
import './mini-toDo.css'

function ToDo() {
    const [inputValue, setInputValue] = useState('')
    const { taskDone, setTaskDone } = useWidget()
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
            setTaskDone((p)=> p + 1)
        }
    };






    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
            setTaskDone((p)=> p - 1)
        
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
            <div className="todo" style={{ position: 'absolute', cursor: 'grab' }} onMouseDown={handleMouseDown}>
             
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
