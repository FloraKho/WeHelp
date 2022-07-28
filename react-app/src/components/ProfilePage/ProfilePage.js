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
    const imageArr = Object.values(useSelector(state => state.imageState));
    const imageOwn = imageArr.filter(review => review.user_id === sessionUser?.id)
    const reviewArr = Object.values(useSelector(state => state.reviewState))
    const reviewOwn = reviewArr.filter(review => review.user_id === sessionUser?.id)
    const [showOwnBiz, setShowOwnBiz] = useState(false)
    const [showOwnRev, setShowOwnRev] = useState(true)
    const [showOwnImg, setShowOwnImg] = useState(false)

    const findBusinessPic = (number) => {
        return imageArr.filter(image => image.business_id == number)[0]
    }

    useEffect(() => {
        dispatch(getAllImagesThunk())
        dispatch(getAllReviewThunk())
    }, [])

    const showBiz = () => {
        setShowOwnBiz(true)
        setShowOwnRev(false)
        setShowOwnImg(false)
    }
    const showRev = () => {
        setShowOwnRev(true)
        setShowOwnBiz(false)
        setShowOwnImg(false)
    }
    const showImg = () => {
        setShowOwnImg(true)
        setShowOwnRev(false)
        setShowOwnBiz(false)
    }
    

    return (
        <>
            <div className="profile-container">
                <div className="profile-top-bar">
                    <div>
                        <img className="profile-img" src={ sessionUser?.profile_pic } alt={sessionUser?.username} />
                        <EditModal />
                    </div>
                    <div>
                        <h1>{sessionUser.username}</h1>
                        <p><i class="fa-solid fa-envelope"></i> {sessionUser.email}</p>
                        <p><i class="fa-solid fa-star"></i> {reviewOwn.length} Reviews</p>
                        <p><i class="fa-solid fa-utensils"></i> {businessOwn.length} Business</p>
                        <p><i class="fa-solid fa-camera"></i> {imageOwn.length} Images</p>

                    </div>
                </div>
                <hr></hr>
                <div className="profile-content">
                    <div className="profile-select-container">
                        <div className="profile-select" onClick={showRev}>View Posted Reviews</div>
                        <div className="profile-select" onClick={showBiz}>View Posted Businesses</div>
                        <div className="profile-select" onClick={showImg}>View Posted Images</div>
                    </div>
                    <div className="profile-selected-container">
                        {showOwnRev && (
                            <>
                                <h1>Your Reviews</h1>
                                {reviewOwn && reviewOwn.map( review => (
                                    <div className="review-card">
                                        <div className="review-card-left" style={{ backgroundImage: `url(${findBusinessPic(review.business_id)?.image_url})` }}></div>
                                        <div className="review-card-right">
                                            <h4>{businesses[review.business_id].name}</h4>
                                            <p>Rating: {review.rating}</p>
                                            <p>Content: {review.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )
                        }
                        {showOwnBiz && (
                            <>
                                <h1>Your Businesses </h1>
                                {businessOwn && businessOwn.map( business => (
                                    <NavLink style={{ textDecoration: 'none', color: 'black' }} to={`/businesses/${business.id}`}>
                                    <div className="review-card">
                                        <div className="review-card-left" style={{ backgroundImage: `url(${findBusinessPic(business.id)?.image_url})` }}></div>
                                        <div className="review-card-right">
                                            <h4>{business.name}</h4>
                                            <p>{business.description.slice(0, 100)}...</p>
                                        </div>
                                    </div>
                                </NavLink>
                                ))}
                            </>
                        )}
                        {showOwnImg && (
                            <div >
                                <h1>Your Images</h1>
                                {imageOwn && imageOwn.map( image => (
                                    <div className="review-card">
                                        <NavLink style={{ textDecoration: 'none', color: 'black', textAlign:'center'}} to={`/businesses/${image.business_id}`}>
                                            <h4>{businesses[image.business_id].name}</h4>
                                            <img src={image.image_url} alt='images' className="img-size"/>
                                        </NavLink>
                                    </div>
                                ))}    
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </>
    )
}


export default ProfilePage;