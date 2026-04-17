import { useEffect, useRef, useState } from 'react'

import './ModalProfile.css'

function ModalProfile() {
    
    return (
        <>
            <div class="edit-profile-container">

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
                        />
                    </div>


                    <div class="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            id="email"
                            disabled
                        />
                    </div>


                    <div class="form-group">
                        <label>New Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Leave empty to keep current"
                        />
                    </div>


                    <div class="form-actions">
                        <button type="submit" class="button primary">
                            Save Changes
                        </button>

                        <button type="button" class="button secondary" id="cancelBtn">
                            Cancel
                        </button>
                    </div>

                </form>

            </div>




        </>
    )
}

export default ModalProfile
