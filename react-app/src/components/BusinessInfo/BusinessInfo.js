import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getReviewThunk } from '../../store/reviews';
import { getBusinessThunk } from '../../store/businesses'
import { getBizImagesThunk } from '../../store/images'
import './BusinessInfo.css'




function BusinessInfo() {

    const dispatch = useDispatch();
    const {businessId} = useParams();

    const reviews = useSelector(state => state.reviewState);
    const images = useSelector (state => state.imageState);
    const businessInfo = useSelector (state => state.bizState);
    const singleBusiness = businessInfo[parseInt(businessId)];

    const [isLoaded, setLoaded] = useState(false);

    useEffect (()=>{
        dispatch(getReviewThunk(parseInt(businessId)))
        .then(()=>dispatch(getBusinessThunk(parseInt(businessId))))
        .then(()=>dispatch(getBizImagesThunk(parseInt(businessId))))
        .then(()=>setLoaded(true))
    },[])
    console.log(Object.values(images));

    return(
        isLoaded&&
        <div>
            {Object.values(images).map(({ id, image_url }) => (
                <div className='background' key={id}>
                    <div className="image_container" style={{backgroundImage:`url(${image_url})`}}></div>
                </div>
            ))}
            <h1>{singleBusiness?.name }</h1>
            <p><span>· {singleBusiness.price_range} ·</span>{singleBusiness?.description}</p>
            <h2>Location & Hours</h2>
            <p>Operation Hours: {singleBusiness?.business_hours}</p>
            <p>Location: {singleBusiness?.address}, {singleBusiness?.city}, {singleBusiness.zip_code} </p>
            <p>Phone: {singleBusiness.phone}</p>
            <p>Website: {singleBusiness.website}</p>
            <h2>Recommened Reviews</h2>
        </div>
    )
}



export default BusinessInfo;