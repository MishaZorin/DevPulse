import { useEffect, useRef, useState } from 'react'

import './ModalProfile.css'

function ModalProfile({ isOpen, handleClose }) {
    if (!isOpen) return null;
    return (
        <>
            <div className="modal-overlay">
                <div class="edit-profile-container" onClick={(e) => e.stopPropagation()}>

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


                     


                        <div class="form-actions">
                            <button type="submit" class="button primary">
                                Save Changes
                            </button>

                            <button type="button" class="button secondary" id="cancelBtn" onClick={handleClose}>
                                Cancel
                            </button>
                        </div>

                    </form>

                </div>
            </div>





        </>
    )
}

export default ModalProfile
