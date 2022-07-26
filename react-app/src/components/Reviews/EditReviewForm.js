import React, { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getBusinessThunk } from '../../store/businesses'
import { Redirect } from 'react-router-dom';
import { getReviewThunk, addReviewThunk } from "../../store/reviews";

const EditReviewForm = (review) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { businessId } = useParams();
    useEffect(() => {
        dispatch(getBusinessThunk(parseInt(businessId)))
    }, [])
    const businessInfo = useSelector(state => state.bizState);
    const singleBusiness = businessInfo[parseInt(businessId)];


    const [errors, setErrors] = useState([]);
    const [rating, setRating] = useState(0);
    const [content, setContent] = useState(review);
    const user = useSelector(state => state.session.user)


    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = ({
            rating: rating,
            content: content
        })
        await
            dispatch(updateReviewThunk(payload))
            .then(() => dispatch(getReviewThunk(payload)));

        history.push(`/businesses/${businessId}`);

    }

    //
    return (
        <div>
            <h1>{singleBusiness?.name}</h1>
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

export default ReviewForm;