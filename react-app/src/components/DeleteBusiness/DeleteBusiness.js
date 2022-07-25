import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteBusinessThunk } from '../../store/businesses';
import './DeleteBusiness.css'

function DeleteBusiness({ businessId }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const [showModal, setShowModal] = useState(false);

    const handleDeleteSubmit = async (e) => {
        e.prevenDefault();
        await dispatch(deleteBusinessThunk(businessId));
        setShowModal(false);
        history.push('/');
    }

    return (
        <>
            <div>
                <h2 onClick={() => setShowModal(true)}>Delete</h2>
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <h2>Delete Business</h2>
                    <p >Are you sure you want to delete your business listing?</p>
                    <div>
                        <button onClick={() => setShowModal(false)}>Cancel</button>
                        <button onClick={handleDeleteSubmit}>Delete</button>
                    </div>
                </Modal>
            )}
        </>
    )
}

export default DeleteBusiness;