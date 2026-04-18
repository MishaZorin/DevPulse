import { useEffect, useState } from 'react'

import './network.css'

function Network() {
  const ZONES_COUNT = 35;
  const grid = Array.from({ length: ZONES_COUNT });
  const [isFast, setIsFast] = useState(false)
  const [blueClass, setBlueClass] = useState('')
  const [data, setData] = useState(null)
  function updateConnectionStatus() {
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const currentSpeed = conn.downlink;
    setIsFast(currentSpeed > 5);
    if (!conn) {
      console.error('API erorr');
      return;
    }
    setData({
      speed: conn.downlink,
      delay: conn.rtt,
      type: conn.effectiveType,
      connectionMethod: conn.type || 'не определен'
    })

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
      <div className="network-widget" style={{ position: 'absolute', cursor: 'grab' }} onMouseDown={handleMouseDown}>
        <div className="network-content">
          <div className="left-info">
            <div className="status-label">NETWORK NODE</div>
            <p><span>Speed:</span> {data?.speed} Mbps</p>
            <p><span>Delay:</span> {data?.delay} ms</p>
            <p><span>Type:</span> {data?.type}</p>
            <p><span>Method:</span> {data?.connectionMethod}</p>
          </div>

          <div className="right-matrix">
            <div className="matrix-grid">
              {grid.map((zone, index) => (
                <div
                  key={index}
                  className={`brick ${isFast && index >= 12 ? 'blueClass' : ''}`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <button onClick={updateConnectionStatus}>Scan Network</button>
      </div>


    </>
  )
}

export default Network
