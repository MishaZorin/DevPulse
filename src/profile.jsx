import { useEffect, useRef, useState } from 'react'
import './profile.css'
import { useNavigate } from 'react-router-dom'
import ModalProfile from './ModalProfile'

function Profile({inputValue}) {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  function handleOpen() {
    setIsOpen(true)
  }
  function handleClose() {
    setIsOpen(false)
  }


  return (
    <>

      <div className="container">

        <div className="profile-header">
          <div className="avatar" id="avatar"></div>

          <div className="user-info">
            <h2 id="username">{inputValue}</h2>
            <p id="email">user@email.com</p>
          </div>
        </div>

        <div className="grid">

          <div className="card">
            <h3>Account</h3>
            <p>UserName:</p>
            <p>e-mail:</p>
            
            <button className="button" onClick={() => navigate("/profileEdit")}>Edit profile</button>
          </div>

          <div className="card">
            <h3>Dashboard</h3>
            <p>Active widgets: <span id="widgetsCount">0</span></p>
            <button className="button" onClick={() => navigate('/')}>Go to dashboard</button>
          </div>

          {/* <div class="card">
            <h3>Settings</h3>
            <button className="button">Theme</button>
            <button className="button">Notifications</button>
          </div> */}

          <div class="card">
            <h3>Stats</h3>
            <p>Focus time: 0h</p>
            <p>Tasks done: 0</p>
          </div>

        </div>
        <div className="logout">
          <button >Log out</button>

        </div>

      </div>


    </>
  )
}

export default Profile
