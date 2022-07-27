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
                <button onClick={() => setShowModal(true)}>Edit</button>
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div>
                        <h2>Select Your Profile Picture</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={updateImage}
                            />
                            <button type="submit">Change</button>
                        </form>
                        <div>
                            <button onClick={() => setShowModal(false)}>Cancel</button>
                        </div>
                    </div>
                </Modal>
            )}

        </>
    )
}

export default EditModal;