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

    const handleDeleteSubmit = () => {
        dispatch(deleteBusinessThunk(businessId));
        history.push('/businesses');

    }

    return (
        <>
            <div>
                <div id="delete-on-info" onClick={() => setShowModal(true)}><i class="fa-solid fa-trash-can"></i> No longer operating?</div>
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div className='delete-biz-modal'>
                        <h2>Delete Business</h2>
                        <p >Are you sure you want to delete your business listing? This action cannot be undo.</p>
                        <div className='delete-biz-buttons'>
                            <button className="modal-cancel" onClick={() => setShowModal(false)}>Cancel</button>
                            <button id="modal-delete" onClick={handleDeleteSubmit}>Delete</button>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    )
}

export default DeleteBusiness;