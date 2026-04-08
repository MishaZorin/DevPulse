import { useState } from 'react'

import './copyboard.css'

function Copyboard() {
  const [text, setText] = useState('')
  async function writeClipboardText(text) {
    try{
        await navigator.clipboard.writeText(text)
    }
    catch(error){
        console.error(error.message)

    }
    
  }

  return (
    <>
    <div className='copy-block'>
        <textarea name="" id="" placeholder='Для дальнейшего коопирования'  onChange={(e) => setText(e.target.value)}></textarea>
        <button onClick={()=>writeClipboardText(text)} className='copyButton' >Copy!</button>
    </div>
    </>
  )
}

export default Copyboard
