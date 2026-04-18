import { useEffect, useRef, useState } from 'react'
import coffeeImgMusic from './assets/coffee.png'
import coffeeAudio from './assets/coffeeMusic.mp3'
import './focus.css'

function Focus() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const audioRef = useRef(null)

  function handlePlay() {
    audioRef.current.play()
    setIsPlaying(true)

  }
  function handlePause() {
    audioRef.current.pause()
    setIsPlaying(false)

  }
  function handlePlayPause() {
    if (isPlaying) {
      handlePause()
    }
    else {
      handlePlay()
    }
  }
  function handleSeek(e) {
    audioRef.current.currentTime = e.target.value
    setCurrentTime(e.target.value)
  }
  function handleTimeUpdate() {
    setCurrentTime(audioRef.current.currentTime)
    setDuration(audioRef.current.duration)
  }
  const formatTime = (time) => {
    const min = Math.floor(time / 60)
    const sec = Math.floor(time % 60)
    return `${min}:${sec < 10 ? '0' : ''}${sec}`
  }
  function nextTrack(){

  }
  useEffect(() => {
  const audioEl = audioRef.current;

  if (audioEl) {
    audioEl.addEventListener("timeupdate", handleTimeUpdate);
  }

  return () => {
    if (audioEl) {
      audioEl.removeEventListener("timeupdate", handleTimeUpdate);
    }
  };
}, []);
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
      <div className="player-card" style={{ position: 'absolute', cursor: 'grab' }} onMouseDown={handleMouseDown}>
        <img src={coffeeImgMusic} alt=""/>
        <input type="range" min={0} max={duration} value={currentTime} onChange={handleSeek} />
        <audio src={coffeeAudio} ref={audioRef} onTimeUpdate={handleTimeUpdate}></audio>
        <div className="track-duration">
          <p style={{ color: 'white' }}>{formatTime(currentTime)}</p>
          <p style={{ color: 'white' }}>{formatTime(duration)}</p>
        </div>
        <button onClick={handlePlayPause} style={{width:'60px'}}>
          <span>{isPlaying ? '❚❚' : '▶'}</span>
          
        </button>
      
      </div>


    </>
  )
}

export default Focus
