import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getAllImagesThunk } from '../../store/images'
import { getAllReviewThunk } from "../../store/reviews";
import EditModal from "./EditModal";
import './ProfilePage.css'



function ProfilePage({businesses}) {


    const dispatch = useDispatch();
    let sessionUser = useSelector(state => state.session.user)
    const businessArr = Object.values(businesses)
    const businessOwn = businessArr.filter(business => business.user_id === sessionUser?.id)
    const images = useSelector(state => state.imageState);
    const imageArr = Object.values(images);
    const reviewArr = Object.values(useSelector(state => state.reviewState))
    const reviewOwn = reviewArr.filter(review => review.user_id === sessionUser?.id)

    const [showOwnBiz, setShowOwnBiz] = useState(false)
    const [showOwnRev, setShowOwnRev] = useState(false)

    const findBusinessPic = (number) => {
        return imageArr.filter(image => image.business_id == number)[0]
    }

    useEffect(() => {
        dispatch(getAllImagesThunk())
        dispatch(getAllReviewThunk())
    }, [])



    return (
        <>
        <h1>Profile</h1>
        <div>
                <img src={ sessionUser?.profile_pic } alt={sessionUser?.username} />
                <EditModal />
                <h3>{sessionUser.username}</h3>
                <h3>{sessionUser.email}</h3>
        </div>
        <div>
            <h1>Your Business Listing</h1>

            {businessOwn && businessOwn.map(biz => (
                <div>
                    {biz.name}
                </div>
            ))}
            
        </div>


        </>
    )
}

export default ProfilePage;