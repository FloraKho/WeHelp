import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addImageThunk } from '../../store/images';


function UploadModal({businessId}){
    const dispatch = useDispatch();
    const history = useHistory();

    const [showModal, setShowModal] = useState(false);
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const imageInfo = {
            business_id: parseInt(businessId),
            image_url: image
        }

        console.log("Image INFO", imageInfo)
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
                <button onClick={() => setShowModal(true)}>Select A Image</button>
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div>
                        <h2>Select Your Business Image Here!</h2>
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