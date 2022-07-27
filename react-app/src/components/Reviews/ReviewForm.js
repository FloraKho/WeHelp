import React, { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getBusinessThunk } from '../../store/businesses'
import { Redirect } from 'react-router-dom';
import { getReviewThunk, addReviewThunk } from "../../store/reviews";
import "./Reviews.css"
import { BsFillBookmarkStarFill } from "react-icons/bs";

const ReviewForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { businessId } = useParams();

    useEffect(() => {
        dispatch(getBusinessThunk(parseInt(businessId)))
    }, [])

    const businessInfo = useSelector(state => state.bizState);
    const singleBusiness = businessInfo[parseInt(businessId)];
    const stars = Array(5).fill(0)


    const [errors, setErrors] = useState([]);
    const [rating, setRating] = useState(0);
    const [content, setContent] = useState('');
    const [hoverVal, setHoverVal] = useState(undefined);
    const user = useSelector(state => state.session.user)

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
            user_id: user.id,
            business_id: parseInt(businessId),
            rating: rating,
            content: content
        })
        await
            dispatch(addReviewThunk(payload))
                .then(() => dispatch(getReviewThunk(payload)));

        history.push(`/businesses/${businessId}`);
    }

    //
    return (
        <div className="review-page">
            <h1>{singleBusiness?.name}</h1>
            <form onSubmit={handleSubmit}>
                <div className="review-form">
                    <div id="rating-stars">
                        {stars.map((_, index) => {
                            return (
                                <BsFillBookmarkStarFill
                                    key={index}
                                    value={rating}
                                    size={40}
                                    onClick={() => handleClick(index + 1)}
                                    onMouseOver={() => handleMouseOver(index + 1)}
                                    onMouseLeave={handleMouseLeave}
                                    onChange={(e) => setRating(e.target.value)}
                                    color={(hoverVal || rating) > index ? colors.red : colors.grey}
                                />
                            )
                        })}
                    </div>
                    <textarea
                        className="review-textarea"
                        name="content"
                        type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Came here on a Saturday night spontaneously- I've heard about this place many times before and was excited when they were able to seat us right away upon arrival. I didn't have expectations for this place, but with each and every dish was blown away by the complexity of flavors and attention to detail."
                        required={true}
                    />
                </div>
                <button className="post-review-button" type="submit">Post Review</button>
            </form>
        </div>
    )
}

export default ReviewForm;