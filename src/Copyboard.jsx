import { useState, useEffect } from 'react'
import { useWidget } from './Context';
import './copyboard.css'

function Copyboard() {
  const [text, setText] = useState('')
  const { addedWidgets, deleteWidgetFromDashboard } = useWidget();
  async function writeClipboardText(text) {
    try {
      await navigator.clipboard.writeText(text)
    }
    catch (error) {
      console.error(error.message)

    }

  }
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
      <div
        className='copy-block'
        onMouseDown={handleMouseDown}
        style={{ position: 'absolute', cursor: 'grab' }}
      >


        <h1>Copyboard</h1>
        <textarea onChange={(e) => setText(e.target.value)}></textarea>
        <button onClick={() => writeClipboardText(text)}>Copy!</button>
      </div>
    </>
  )
}

export default Copyboard
