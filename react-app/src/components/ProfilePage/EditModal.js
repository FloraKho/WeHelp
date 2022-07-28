import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updatePicThunk } from '../../store/session';



function EditModal() {
    const dispatch = useDispatch();
    const history = useHistory();
    // const sessionUser = useSelector(state => state.session.user)
    // const username = sessionUser?.username;
    // const email = sessionUser?.email;
    // const password = sessionUser?.email
    

    const [showModal, setShowModal] = useState(false);
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            profile_pic: image
        }

        await dispatch(updatePicThunk(user));
        setImage(null)
        setShowModal(false)
        history.push('/')
    }


    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    return (
        <>
            <div>
                <button className="update-profile-pic" onClick={() => setShowModal(true)}><i class="fa-solid fa-upload"></i> Update Profile Picture</button>
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div className='upload-img-div'>
                        <h2>Select Your Profile Picture</h2>
                        <div>
                            <form className='upload-img-form' onSubmit={handleSubmit}>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={updateImage}
                                />
                                <br></br>
                                <br></br>
                                <div className='delete-biz-buttons'>
                                    <button className="modal-cancel" onClick={() => setShowModal(false)}>Cancel</button>
                                    <button type="submit" style={{marginRight:'10px'}}>Change</button>
                                </div>
                            </form>
                            <br></br>
                        </div>
                    </div>
                </Modal>
            )}

        </>
    )
}

export default EditModal;