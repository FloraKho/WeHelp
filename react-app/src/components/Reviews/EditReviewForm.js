import React, { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getBusinessThunk } from '../../store/businesses'
import { Redirect } from 'react-router-dom';
import { getReviewThunk, updateReviewThunk } from "../../store/reviews";

const EditReviewForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { currentReviewId } = useParams();
    
    const allReviews= useSelector(state=>state.reviewState);
    const currentReview = allReviews[currentReviewId];
    const businessId = currentReview[businessId];
    const [rating, setRating] = useState(currentReview.rating);
    const [content, setContent] = useState(currentReview.content);
    const businessInfo = useSelector(state => state.bizState);
    const singleBusiness = businessInfo[parseInt(businessId)];
    console.log(rating,content);
    useEffect(()=>{
        dispatch(getReviewThunk(businessId))
        .then(()=>dispatch(getBusinessThunk(parseInt(businessId))));
    }, [dispatch])
    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = ({
            rating: rating,
            content: content
        })
        await
            dispatch(updateReviewThunk(payload))
            .then(() => dispatch(getReviewThunk(payload)));

        // history.push(`/businesses/${currentReview.}`);

    }

    //
    return (
        <div>
            {/* <h1>{singleBusiness?.name}</h1> */}
            <form onSubmit={handleSubmit}>
                <label>Rating</label>
                <input
                    name='rating'
                    type='number'
                    value={rating}
                    required={true}
                    onChange={(e) => setRating(e.target.value)}
                />
                <label>Content</label>
                <input
                    name="content"
                    type="text"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Please leave your review here"
                    required={true}
                />
                <button type="submit">Post Review</button>
            </form>
        </div>
    )
}

export default EditReviewForm;