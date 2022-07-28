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
    const [newRating, setRating] = useState(currentReview?.rating || 0)
    const [newContent, setContent] = useState(currentReview?.content || "");
    const stars = Array(5).fill(0)
    const [hoverVal, setHoverVal] = useState(undefined);
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const [errors, setErrors] = useState([]);
    const businessId = currentReview?.business_id;

    useEffect(() => {
        let errors = []
        if (newRating == 0) errors.push("Please give a rating!")
        if (!newContent.length) errors.push("Please leave your comments!")
        setErrors(errors);
    }, [newRating, newContent])

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
        setHasSubmitted(true)
        e.preventDefault()
        const payload = ({
            rating: newRating,
            content: newContent,
            user_id: currentReview.user_id,
            business_id: parseInt(currentReview.business_id)

        })
        const newReview = await dispatch(updateReviewThunk(parseInt(currentReviewId), payload))
        // console.log(newReview)
        // console.log(errors.length)
        if (newReview && !errors.length) {
            setHasSubmitted(false)
            history.push(`/businesses/${businessId}`);
        }
    }


    //
    return (
        <div>
            {currentReview &&
                <div className="review-page">
                    <h1>Update Your Review</h1>
                    {hasSubmitted && errors &&
                        <div className="error-msg">
                            {errors.map((error, idx) => <div key={idx}> ❌ {error}</div>)}
                        </div>
                    }
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