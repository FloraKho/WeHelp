import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getBusinessThunk } from '../../store/businesses'
import { Redirect } from 'react-router-dom';

const ReviewForm = () => {
    const dispatch = useDispatch();
    const {businessId} = useParams();
    useEffect (()=>{
        dispatch(getBusinessThunk(parseInt(businessId)))
    },[])
    const businessInfo = useSelector (state => state.bizState);
    const singleBusiness = businessInfo[parseInt(businessId)];


    const [errors, setErrors] = useState([]);
    const [rating, setRating] = useState(0);
    const [content, setContent] = useState('');
    const user = useSelector(state => state.session.user)
  

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log({
            user_id: user.id,
            business_id: parseInt(businessId),
            rating: rating,
            content: content
        })
    }

    return (
        <div>
            <h1>{singleBusiness?.name}</h1>
            <form onSubmit={handleSubmit}>
                <label>Rating</label>
                <input
                    name='rating'
                    type='number'
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                />
                <label>Content</label>
                <input
                    name="content"
                    type="text"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Please leave your review here"
                />
                <button type="submit">Post Review</button>
            </form>
        </div>
    )
}

export default ReviewForm;