import React, { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getBusinessThunk } from '../../store/businesses'
import { Redirect } from 'react-router-dom';
import { getSingleReviewThunk, updateReviewThunk } from "../../store/reviews";
import "./Reviews.css"
import { BsFillBookmarkStarFill } from "react-icons/bs";

const EditReviewForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { currentReviewId } = useParams();

    const review = useSelector(state => state.reviewState);
    useEffect(() => {
        dispatch(getSingleReviewThunk(parseInt(currentReviewId)));
    }, [dispatch])


    const currentReview = review[parseInt(currentReviewId)];
    const [newRating, setRating] = useState(currentReview?.rating)
    const [newContent, setContent] = useState(currentReview?.content);
    const stars = Array(5).fill(0)
    const [hoverVal, setHoverVal] = useState(undefined);
    const businessId = currentReview?.business_id;

    const colors = {
        red: "#FF0033",
        grey: "#a9a9a9"

    };

    const handleClick = value => {
        setRating(value)
    }

    const handleMouseOver = newHoverValue => {
        setHoverVal(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverVal(undefined)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = ({
            rating: newRating,
            content: newContent,
            user_id: currentReview.user_id,
            business_id: parseInt(currentReview.business_id)

        })
        await dispatch(updateReviewThunk(parseInt(currentReviewId), payload))
        history.push(`/businesses/${businessId}`);

    }


    //
    return (
        <div>
            {currentReview &&
                <div className="review-page">
                    <h1>Update Your Review</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="review-form">
                            <div id="rating-stars">
                                {stars.map((_, index) => {
                                    return (
                                        <BsFillBookmarkStarFill
                                            key={index}
                                            value={newRating}
                                            size={40}
                                            onClick={() => handleClick(index + 1)}
                                            onMouseOver={() => handleMouseOver(index + 1)}
                                            onMouseLeave={handleMouseLeave}
                                            onChange={(e) => setRating(e.target.value)}
                                            color={(hoverVal || newRating) > index ? colors.red : colors.grey}
                                        />
                                    )
                                })}
                            </div>
                            <textarea
                                className="review-textarea"
                                name="content"
                                type="text"
                                value={newContent}
                                onChange={(e) => setContent(e.target.value)}
                                required={true}
                            />
                        </div>
                        <button className="post-review-button" type="submit">Post Review</button>
                    </form>
                </div>
            }
        </div>

    )
}

export default EditReviewForm;