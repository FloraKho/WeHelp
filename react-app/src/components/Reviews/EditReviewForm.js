import React, { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getBusinessThunk } from '../../store/businesses'
import { Redirect } from 'react-router-dom';
import { getSingleReviewThunk, updateReviewThunk } from "../../store/reviews";

const EditReviewForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { currentReviewId } = useParams();
    console.log(`current Id: ${currentReviewId}`)
    
    const review = useSelector(state => state.reviewState);
    useEffect(() => {
        dispatch(getSingleReviewThunk(parseInt(currentReviewId)));
    }, [dispatch])


    const currentReview = review[parseInt(currentReviewId)];
    const [newRating, setRating] = useState(currentReview?.rating)
    const [newContent, setContent] = useState(currentReview?.content);
    
    const businessId = currentReview?.business_id;


    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = ({
            rating: newRating,
            content: newContent
        })
        await dispatch(updateReviewThunk(parseInt(currentReviewId), payload))
        history.push(`/businesses/${businessId}`);

    }


    //
    return (
        <div>
        {currentReview &&
            <form onSubmit={handleSubmit}>
                <label>Rating</label>
                <input
                    name='rating'
                    type='number'
                    value={newRating}
                    required={true}
                    onChange={(e) => setRating(e.target.value)}
                />
                <label>Content</label>
                <input
                    name="content"
                    type="text"
                    value={newContent}
                    onChange={(e) => setContent(e.target.value)}
                    required={true}
                />
                <button type="submit">Post Review</button>
            </form>
        }       
        </div>
        
    )
}

export default EditReviewForm;