import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteImageThunk } from '../../store/images';
import './ImageUploadPage.css'

function DeleteImageModal({ businessId, imageId }) {

    const dispatch = useDispatch();
    const history = useHistory();

    const [showModal, setShowModal] = useState(false);

    const handleDeleteSubmit = async () => {
        await dispatch(deleteImageThunk(imageId))
        history.push(`/businesses/${businessId}/image-upload`);
    }

    return (
        <>

            <div className="cross-button" onClick={() => setShowModal(true)}>
                <i class="fa-regular fa-circle-xmark fa-xl"></i>
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div>
                        <h2>Remove this image from your listing</h2>
                        <p >Are you sure you want to delete this image?</p>
                        <div>
                            <button onClick={() => setShowModal(false)}>Cancel</button>
                            <button onClick={handleDeleteSubmit}>Delete</button>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    )
}

export default DeleteImageModal;