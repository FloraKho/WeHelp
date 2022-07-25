import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getReviewThunk } from '../../store/reviews';
import { getBusinessThunk } from '../../store/businesses'
import { getBizImagesThunk } from '../../store/images'




function BusinessInfo() {

    const dispatch = useDispatch();
    const {businessId} = useParams();

    const reviews = useSelector(state => state.reviewState);
    const images = useSelector (state => state.imageState);
    const businessInfo = useSelector (state => state.bizState);

    const [isLoaded, setLoaded] = useState(false);

    useEffect (()=>{
        dispatch(getReviewThunk(parseInt(businessId)))
        .then(()=>dispatch(getBusinessThunk(parseInt(businessId))))
        .then(()=>dispatch(getBizImagesThunk(parseInt(businessId))))
        .then(()=>setLoaded(true))
    },[])
    console.log(reviews);
    console.log(images);
    console.log(businessInfo);

    return(
        isLoaded&&
        <div>
            <h1>BusinessInfo for ID {businessId}</h1>
            <div>{businessInfo[parseInt(businessId)].name }</div>
        </div>
    )
}



export default BusinessInfo;