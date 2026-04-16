import { useState,useEffect } from 'react'
import { useWidget } from './Context';
import './copyboard.css'

function Copyboard() {
  const [text, setText] = useState('')
   const { addedWidgets, deleteWidgetFromDashboard } = useWidget();
  async function writeClipboardText(text) {
    try{
        await navigator.clipboard.writeText(text)
    }
    catch(error){
        console.error(error.message)

    }
    
  }
    // useEffect(() => {
    //       let target = document.getElementById('target')
    //       target.onmousedown = function (event) { // (1) отследить нажатие
  
    //           // (2) подготовить к перемещению:
    //           // разместить поверх остального содержимого и в абсолютных координатах
    //           target.style.position = 'absolute';
    //           target.style.zIndex = 1000;
    //           // переместим в body, чтобы мяч был точно не внутри position:relative
              
    //           // и установим абсолютно спозиционированный мяч под курсор
  
    //           moveAt(event.pageX, event.pageY);
  
    //           // передвинуть мяч под координаты курсора
    //           // и сдвинуть на половину ширины/высоты для центрирования
    //           function moveAt(pageX, pageY) {
    //               target.style.left = pageX - target.offsetWidth / 2 + 'px';
    //               target.style.top = pageY - target.offsetHeight / 2 + 'px';
    //           }
  
    //           function onMouseMove(event) {
    //               moveAt(event.pageX, event.pageY);
    //           }
  
  
    //           document.addEventListener('mousemove', onMouseMove);
    //           target.onmouseup = function () {
    //               document.removeEventListener('mousemove', onMouseMove);
    //               target.onmouseup = null;
    //           };
  
    //       };
    //   }, [])
      function deleteWidget(widget) {
        deleteWidgetFromDashboard(widget)

    }

  return (
    <>
    <div className='copy-block' id='target'>
      {addedWidgets.map((widget, index)=>(
                <button onClick={() => deleteWidget(widget)} className='deleteButton'>Delete widget</button>
                ))}
        <textarea name="" id="" placeholder='Для дальнейшего коопирования'  onChange={(e) => setText(e.target.value)} draggable="true"></textarea>
        <button onClick={()=>writeClipboardText(text)} className='copyButton' >Copy!</button>
    </div>
    </>
  )
}

export default Copyboard
