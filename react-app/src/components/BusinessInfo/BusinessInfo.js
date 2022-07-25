import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getReviewThunk } from '../../store/reviews';



function BusinessInfo() {

    const dispatch = useDispatch();
    const {businessId} = useParams();

    const reviews = useSelector(state => state.reviewState)
    useEffect (()=>{
        dispatch(getReviewThunk(parseInt(businessId)));
    },[])
    return(
        <div>
            <h1>BusinessInfo for ID {businessId}</h1>
        </div>
    )
}



export default BusinessInfo;