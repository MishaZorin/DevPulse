import { useState } from 'react'
import './ModalProfile.css'
import { useNavigate } from 'react-router-dom'

function ProfileEdit() {
  const navigate = useNavigate()

  const [inputValue, setInputValue] = useState('')
  const [avatar, setAvatar] = useState(null)

  return (
    <div className="modal-overlay">
      <div className="edit-profile-container">

        <h2>Edit Profile</h2>

        <div className="avatar-section">
          <div className="avatar-preview">
            {avatar && <img src={avatar} alt="preview" />}
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0]
              if (!file) return

              const reader = new FileReader()
              reader.onloadend = () => {
                setAvatar(reader.result)
              }
              reader.readAsDataURL(file)
            }}
          />
        </div>

        <form>
          <div className="form-group">
            <label>Display Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>

          <div className="form-actions">

            <button
              type="submit"
              className="button primary"
              onClick={(e) => {
                e.preventDefault()

                localStorage.setItem("username", inputValue)

                if (avatar) {
                  localStorage.setItem("avatar", avatar)
                }

                navigate("/profile")
              }}
            >
              Save Changes
            </button>

            <button
              type="button"
              className="button secondary"
              onClick={() => navigate("/profile")}
            >
              Cancel
            </button>

          </div>
        </form>

      </div>
    </div>
  )
}

export default ProfileEdit