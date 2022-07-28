import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addImageThunk } from '../../store/images';
import './ImageUploadPage.css'

function UploadModal({ businessId }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user)

    const [showModal, setShowModal] = useState(false);
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const imageInfo = {
            user_id: sessionUser.id,
            business_id: parseInt(businessId),
            image_url: image
        }

        await dispatch(addImageThunk(imageInfo));
        setImage(null)
        setShowModal(false)
        history.push(`/businesses/${businessId}/image-upload`)
    }


    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    return (
        <>
            <div>
                <button id='upload-photo-button' onClick={() => setShowModal(true)}>
                    <i class="fa-solid fa-images fa-lg"></i> Upload Photo
                </button>
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div className='image-upload-modal'>
                        <h2>Select Photo Here!</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={updateImage}
                            />
                            <div className='delete-biz-buttons'>
                                <button className="modal-cancel" onClick={() => setShowModal(false)}>Cancel</button>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </Modal>
            )}

        </>
    )
}

export default UploadModal;