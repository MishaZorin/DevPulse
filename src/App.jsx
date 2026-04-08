import { useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import { WidgetProvider, useWidget } from './Context';
import Dashboard from './Dashboard'
import Pomodoro from './Pomodoro'
import Copyboard from './Copyboard'
import Network from './Network'
import GitHub from './GitHubActivity'
import logo from './assets/logo.png'
import ToDo from './mini-toDo'
import './App.css'

import PomodoroImg from './assets/Pomodoro.png'
import CopyboardImg from './assets/Copyboard.png'
import NetworkImg from './assets/Network.png'
import GitHubImg from './assets/GitHub.png'
import ToDoImg from './assets/ToDo.png'

function App() {
  const navigate = useNavigate();

  const { addWidgetToDashboard, addedWidgets } = useWidget();
  const { activeWidgets, setActiveWidgets } = useWidget()
  const [widgets, setWidgets] = useState([
    {
      // currentImg: PomodoroImg,
      currentName: 'Pomodoro',
      currentWidget: Pomodoro
    },
    {
      // currentImg: CopyboardImg,
      currentName: 'Copyboard',
      currentWidget: Copyboard
    },
    {
      // currentImg: NetworkImg,
      currentName: 'Network',
      currentWidget: Network
    },
    {
      // currentImg: GitHubImg,
      currentName: 'GitHub',
      currentWidget: GitHub
    },
    {
      // currentImg: ToDoImg,
      currentName: 'ToDo',
      currentWidget: ToDo
    }
  ])
  function addWidget(widget) {
    const isAlreadyAdded = addedWidgets.some(w => w.currentName === widget.currentName);


    if (!isAlreadyAdded) {
      addWidgetToDashboard(widget);
    }
  }
  return (
    <>
      <Routes>
        <Route path="/" element={
          <div className='container'>
            <header>
              {/* <h1 className='logo-class'><img src={logo} alt="" />DevPulse</h1> */}
              <h2>Активные виджеты: {activeWidgets}</h2>
              <button onClick={() => navigate("/dashboard")} className='addButton'>Dashboard</button>
            </header>
            <div className="centerMobile">
              <div className="vidgetsMenu" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {widgets.map((widget, index) => (
                  <div className="widgets-container" key={index}>
                    <div className='img-container'>
                      <h4 style={{ color: 'white' }}>{widget.currentName}</h4>
                      <button onClick={() => addWidget(widget)} className='addButton'>Добавить виджет</button>
                      {/* <img src={widget.currentImg} alt={widget.currentName} /> */}
                    </div>

                  </div>

                ))}
              </div>
            </div>

          </div>
        } />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
