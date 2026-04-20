import { useEffect, useState } from 'react'
import './profile.css'
import { useNavigate } from 'react-router-dom'
import { WidgetProvider, useWidget } from './Context';

import { auth } from './firebase';

function Profile() {
  const navigate = useNavigate()
  const { activeWidgets, setActiveWidgets } = useWidget()
  const { email, setEmail } = useWidget()
  const [username, setUsername] = useState('')
  const [avatar, setAvatar] = useState(null)
  const { taskDone, setTaskDone } = useWidget()

  useEffect(() => {
    const savedName = localStorage.getItem("username")
    const savedAvatar = localStorage.getItem("avatar")
    const savedEmail = localStorage.getItem("email")



    if (savedName) setUsername(savedName)
    if (savedEmail) setEmail(savedEmail)

    if (savedAvatar) setAvatar(savedAvatar)
  }, [])

  return (
    <div className="container">

      <div className="profile-header">
        <div className="avatar">
          {avatar && <img src={avatar} alt="avatar" />}
        </div>

        <div className="user-info">
          <h2>{username || "No name"}</h2>
          <p>{email}</p>
        </div>
      </div>

      <div className="grid">

        <div className="card">
          <h3>Account</h3>
          <p>UserName: {username}</p>
          <p>{email}</p>

          <button
            className="button"
            onClick={() => navigate("/profileEdit")}
          >
            Edit profile
          </button>
        </div>

        <div className="card">
          <h3>Dashboard</h3>
          <p>Active widgets: {activeWidgets} </p>

          <button
            className="button"
            onClick={() => navigate('/')}
          >
            Go to dashboard
          </button>
        </div>

        <div className="card">
          <h3>Stats</h3>
          <p>Focus time: 0h</p>
          <p>Tasks done: {taskDone}</p>
        </div>

      </div>

      <div className="logout">
        <button
          onClick={() => {
            auth.signOut()
            localStorage.clear()
            navigate("/login")
          }}
        >
          Log out
        </button>
      </div>

    </div>
  )
}

export default Profile