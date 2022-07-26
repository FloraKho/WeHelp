import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getReviewThunk } from '../../store/reviews';
import { getBusinessThunk } from '../../store/businesses'
import { getBizImagesThunk } from '../../store/images'
import DeleteBusiness from '../DeleteBusiness/DeleteBusiness'
import './BusinessInfo.css'



function BusinessInfo() {
    const history = useHistory();
    const dispatch = useDispatch();
    const {businessId} = useParams();
    const reviews = useSelector(state => state.reviewState.reviews);
    const images = useSelector (state => state.imageState);
    const businessInfo = useSelector (state => state.bizState);
    const singleBusiness = businessInfo[parseInt(businessId)];

    const [isLoaded, setLoaded] = useState(false);
    const [users, setUsers] = useState([])

    useEffect (()=> {
        dispatch(getReviewThunk(parseInt(businessId)))
        .then(()=>dispatch(getBusinessThunk(parseInt(businessId))))
        .then(()=>dispatch(getBizImagesThunk(parseInt(businessId))))
        .then(()=>dispatch(getReviewThunk(parseInt(businessId))))
        .then(()=>setLoaded(true))
    },[])

    useEffect(() => {
        async function fetchData() {
          const response = await fetch('/api/users/');
          const responseData = await response.json();
          setUsers(responseData.users);
        }
        fetchData();
    }, []);

    const findUserName = (user_id) => {
        let result = users.filter(user => user.id == user_id);
        return result[0].username
    }

    const handleEdit = () => {
        return history.push(`/businesses/${businessId}/edit`)
    }
    
    const handleAddReview = () => {
        return history.push(`/businesses/${businessId}/post-review`)
    }
    return(
        isLoaded&&
        <div>
            {Object.values(images).map(({ id, image_url }) => (
                <div className='background' key={id}>
                    <div className="image_container" style={{backgroundImage:`url(${image_url})`}}></div>
                </div>
            ))}
            <div>
                <button onClick={handleEdit}>Edit</button>
            </div>
            <div>
                <DeleteBusiness businessId={businessId}/>
            </div>
            <h1>{singleBusiness?.name }</h1>
            <p><span>· {singleBusiness?.price_range} ·</span>{singleBusiness?.description}</p>
            <h2>Location & Hours</h2>
            <p>Operation Hours: {singleBusiness?.business_hours}</p>
            <p>Location: {singleBusiness?.address}, {singleBusiness?.city}, {singleBusiness?.zip_code} </p>
            <p>Phone: {singleBusiness?.phone}</p>
            <p>Website: {singleBusiness?.website}</p>
            <h2>Recommened Reviews</h2>
            <div>
                <button onClick={handleAddReview}>
                    Add Review
                </button>
            </div>
            {Object.values(reviews).map(({ id, content, rating, user_id }) => (
                <div key={id}>
                    <p>{findUserName(user_id)}</p>
                    <p>{rating}</p>
                    <p>{content}</p>
                </div>
            ))}
            
        </div>
    )
}



export default BusinessInfo;