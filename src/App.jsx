import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import { WidgetProvider, useWidget } from './Context';
import Dashboard from './Dashboard'
import Pomodoro from './Pomodoro'
import Copyboard from './Copyboard'
import Network from './Network'
import HabitTracker from './HabitTracker'
import logo from './assets/logo.png'
import ToDo from './mini-toDo'
import Focus from './Focus'
import SignUp from './SignUp'
import LogIn from './LogIn'
import Profile from './profile';
import ProfileEdit from './ModalProfile';
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
  const { setIsSignedUp, isSignedUp } = useWidget()
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
      currentName: 'HabitTracker',
      currentWidget: HabitTracker
    },
    {
      // currentImg: ToDoImg,
      currentName: 'ToDo',
      currentWidget: ToDo
    },
    {
      currentName: 'Focus',
      currentWidget: Focus
    }
  ])
  const [focusWidgets, setFocusWidgets] = useState([
    { currentName: 'Focus', currentWidget: Focus },
    { currentName: 'ToDo', currentWidget: ToDo },
    { currentName: 'Pomodoro', currentWidget: Pomodoro }
  ])

  const [devWidgets, setDevWidgets] = useState([
    // { currentName: 'GitHub', currentWidget: GitHub },
    { currentName: 'Copyboard', currentWidget: Copyboard },
    { currentName: 'Network', currentWidget: Network }
  ])
  const [notesWidgets, setNotesWidgets] = useState([
    { currentName: 'ToDo', currentWidget: ToDo },
    { currentName: 'Copyboard', currentWidget: Copyboard }

  ])




  function addFocusWidget() {
    focusWidgets.forEach(widget => addWidget(widget));



  }
  function addDevWidget() {
    devWidgets.forEach(widget => addWidget(widget));


  }
  function addNotesWidget() {
    notesWidgets.forEach(widget => addWidget(widget));


  }





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
              <h2>Активные виджеты: {activeWidgets}</h2>
              <button onClick={addFocusWidget} style={{ borderRadius: '10px' }}>Focus mode</button>
              <button onClick={addDevWidget} style={{ borderRadius: '10px' }}>Dev mode</button>
              <button onClick={addNotesWidget} style={{ borderRadius: '10px' }}>Notes mode</button>
              <button onClick={() => navigate("/dashboard")} className='addButton'>Dashboard</button>
              <button onClick={() => navigate(isSignedUp ? "/profile" : "/signup")}>
                {isSignedUp ? "Profile" : "Sign Up"}
              </button>
            </header>
            <div className="centerMobile">
              <div className="vidgetsMenu" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {widgets.map((widget, index) => (
                  <div className="widgets-container" key={index}>
                    <div className='img-container'>
                      <h4 style={{ color: 'white' }}>{widget.currentName}</h4>
                      <button onClick={() => addWidget(widget)} className='addButton'>Добавить виджет</button>
             
                    </div>

                  </div>

                ))}
              </div>
            </div>

          </div>
        } />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profileEdit" element={<ProfileEdit />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
