import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addImageThunk } from '../../store/images';


function UploadModal({businessId}){
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
                <button onClick={() => setShowModal(true)}>Add Photo</button>
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div>
                        <h2>Select Photo Here!</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={updateImage}
                            />
                            <button type="submit">Submit</button>
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

export default UploadModal;