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
    const [showOwnRev, setShowOwnRev] = useState(true)

    const findBusinessPic = (number) => {
        return imageArr.filter(image => image.business_id == number)[0]
    }

    useEffect(() => {
        dispatch(getAllImagesThunk())
        dispatch(getAllReviewThunk())
    }, [])

    const showBiz = () => {
        setShowOwnBiz(!showOwnBiz)
        setShowOwnRev(false)
    }
    const showRev = () => {
        setShowOwnRev(!showOwnRev)
        setShowOwnBiz(false)
    }

    return (
        <>
            <h1>Profile</h1>
            <div className="profile-container">

                <div className="profile-side-bar">
                        <img src={ sessionUser?.profile_pic } alt={sessionUser?.username} />
                        <EditModal />
                        <div onClick={showRev}>View Posted Reviews</div>
                        <div onClick={showBiz}>View Posted Businesses</div>

                </div>
                <div className="profile-content">
                    <h3>Name: {sessionUser.username}</h3>
                    <h3>Email: {sessionUser.email}</h3>
                    <hr></hr>
                    {showOwnRev && (
                        <div>
                            <h1>Your Reviews</h1>

                            {reviewOwn && reviewOwn.map( review => (
                                <>
                                    <p>Rating: {review.rating}</p>
                                    <p>Content: {review.content}</p>
                                </>
                            ))}
                            
                        </div>
                    )
                    }
                    {showOwnBiz && (
                    
                        <div>
                            <h1>Your Business Listing</h1>

                            {businessOwn && businessOwn.map( business => (
                                <NavLink style={{ textDecoration: 'none', color: 'black' }} to={`/businesses/${business.id}`}>
                                <div className="business_card">
                                    <div className="business_card_left" style={{ backgroundImage: `url(${findBusinessPic(business.id)?.image_url})` }}></div>
                                    <div className="business_card_right">
                                        <p className="business_name">{business.name}</p>
                                        <p className="business_description">{business.description.slice(0, 100)}...</p>
                                    </div>
                                </div>
                            </NavLink>
                            ))}
                            
                        </div>
                    )}

                </div>
            </div>
        </>
    )
}


export default ProfilePage;