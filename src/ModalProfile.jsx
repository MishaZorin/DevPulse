import { useEffect, useRef, useState } from 'react'
import './ModalProfile.css'
import { useNavigate } from 'react-router-dom'
import Profile from './profile'
function ProfileEdit() {
    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState('')

    return (
        <>
            <div className="modal-overlay">
                <div class="edit-profile-container" >
                    <h2>Edit Profile</h2>
                    <div class="avatar-section">
                        <div class="avatar-preview" id="avatarPreview"></div>
                        <input type="file" accept='image/*' />
                    </div>
                    <form id="editProfileForm">
                        <div class="form-group">
                            <label>Display Name</label>
                            <input
                                type="text"
                                id="displayName"
                                placeholder="Enter your name"
                                value={inputValue}
                                onChange={(event) => setInputValue(event.target.value)}

                            />
                        </div>
                        <div class="form-actions">
                            <button type="submit" class="button primary" onClick={() => navigate("/profile")}>
                                Save Changes
                            </button>
                            <button type="button" class="button secondary" id="cancelBtn" onClick={() => navigate("/profile")}>
                                Cancel
                            </button>
                        </div>

                    </form>

                </div>
            </div>
            <Profile inputValue={inputValue}></Profile>
        </>
    )
}

export default ProfileEdit
