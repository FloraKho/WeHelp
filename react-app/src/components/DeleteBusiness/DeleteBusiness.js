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

    const handleDeleteSubmit = async () => {
        await dispatch(deleteBusinessThunk(businessId));
        console.log("deleted")
        history.push('/businesses');
        console.log("history pushed")
    }

    return (
        <>
            <div>
                <div id="delete-on-info" onClick={() => setShowModal(true)}><i class="fa-solid fa-trash-can"></i> No longer operating?</div>
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div>
                        <h2>Delete Business</h2>
                        <p >Are you sure you want to delete your business listing?</p>
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

export default DeleteBusiness;