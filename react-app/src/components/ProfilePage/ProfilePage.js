import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getAllImagesThunk } from '../../store/images'
import { getAllReviewThunk } from "../../store/reviews";
import EditModal from "./EditModal";
import './ProfilePage.css'
import fiveFilled from '../HomePage/fiveStarsFilled.png'
import fiveEmpty from '../HomePage/fiveStarsEmpty.png'



function ProfilePage({ businesses }) {


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

    const getAverage = (businessId) => {
        const currentReview = reviewArr.filter(review => review.business_id == businessId)
        const ratings = currentReview.map(review => review.rating)
        const averageRating = (ratings.reduce((a, b) => a + b, 0) / ratings.length)
        return Math.floor(Number(averageRating))
    }

    const getPercentage = (businessId) => {
        let percent = (1 - getAverage(businessId) / 5).toFixed(2)
        return percent * 100
    }

    return (
        <>
            <div className="profile-container">
                <div className="grey-div"></div>
                <div className="profile-top-bar">
                    <div className="profile-img" style={{ backgroundImage: `url(${sessionUser?.profile_pic})` }}></div>
                    <div>
                        <h1>{sessionUser.username}</h1>
                        <p>
                            <i class="fa-solid fa-envelope"></i>
                            {` ${sessionUser.email}`}
                        </p>
                        <div className="profile-calculations">
                            <div>
                                <i class="fa-solid fa-star yellow"></i>
                                <span style={{ fontWeight: 'bold' }}>{reviewOwn.length} </span>
                                Reviews
                            </div>
                            <div>
                                <i class="fa-solid fa-utensils yellow icon-space"></i>
                                <span style={{ fontWeight: 'bold' }}>{businessOwn.length} </span>
                                Businesses
                            </div>
                            <div>
                                <i class="fa-solid fa-camera yellow icon-space"></i>
                                <span style={{ fontWeight: 'bold' }}>{imageOwn.length} </span>
                                Images
                            </div>
                        </div>
                        <br></br>
                        <EditModal />
                    </div>
                </div>
                <div className="profile-content">
                    <div className="profile-select-container">
                        <div className={showOwnRev ? "curr-selected" : "profile-select"} onClick={showRev}>
                            <div className="profile-select-icons">
                                <i class="fa-solid fa-star grey"></i>
                            </div>
                            <p>View Reviews</p>
                        </div>
                        <div className={showOwnBiz ? "curr-selected" : "profile-select"} onClick={showBiz}>
                            <div className="profile-select-icons">
                                <i class="fa-solid fa-utensils grey"></i>
                            </div>
                            <p>View Businesses</p>
                        </div>
                        <div className={showOwnImg ? "curr-selected" : "profile-select"} onClick={showImg}>
                            <div className="profile-select-icons">
                                <i class="fa-solid fa-camera grey"></i>
                            </div>
                            <p>View Images</p>
                        </div>
                    </div>
                    <div className="profile-selected-container">
                        {showOwnRev && (
                            <>
                                <h1 style={{ color: '#d32323' }}>Your Reviews</h1>
                                {reviewOwn && reviewOwn.map(review => (
                                    <NavLink style={{ textDecoration: 'none', color: 'black' }} to={`/edit-review/${review.id}`}>
                                        <div className="review-card">
                                            <div className="review-card-left" style={{ backgroundImage: `url(${findBusinessPic(review.business_id)?.image_url})` }}></div>
                                            <div className="review-card-right">
                                                <h4>{businesses[review.business_id].name}</h4>
                                                <p className="profile-location">{businesses[review.business_id].address}, {businesses[review.business_id].city}, {businesses[review.business_id].state}</p>
                                                <div className="fiveEmpty-profile">
                                                    <img src={fiveEmpty} />
                                                </div>
                                                <div className="fiveFilled-profile">
                                                    <img src={fiveFilled} style={{ right: `${(1 - review.rating / 5) * 100}%` }} />
                                                </div>
                                                <p className="profile-message"><i class="fa-solid fa-comment-dots fa-lg"></i> {review.content.slice(0, 100)}...</p>
                                            </div>
                                        </div>
                                    </NavLink>
                                ))}
                            </>
                        )
                        }
                        {showOwnBiz && (
                            <>
                                <h1 style={{ color: '#d32323' }}>Your Businesses </h1>
                                {businessOwn && businessOwn.map(business => (
                                    <NavLink style={{ textDecoration: 'none', color: 'black' }} to={`/businesses/${business.id}`}>
                                        <div className="review-card">
                                            <div className="review-card-left" style={{ backgroundImage: `url(${findBusinessPic(business.id)?.image_url})` }}></div>
                                            <div className="review-card-right">
                                                <h4>{business.name}</h4>
                                                <p className="profile-location">{business.address}, {business.city}, {business.state}</p>
                                                <div className="fiveEmpty-profile">
                                                    <img src={fiveEmpty} />
                                                </div>
                                                <div className="fiveFilled-profile">
                                                    <img src={fiveFilled} style={{ right: `${getPercentage(business.id)}%` }} />
                                                </div>
                                                <p className="profile-message">{business.description.slice(0, 100)}...</p>
                                            </div>
                                        </div>
                                    </NavLink>
                                ))}
                            </>
                        )}
                        {showOwnImg && (
                            <div >
                                <h1 style={{ color: '#d32323' }}>Your Images</h1>
                                {imageOwn && imageOwn.map(image => (
                                    <div className="review-card">
                                        <NavLink style={{ textDecoration: 'none', color: 'black', textAlign: 'center' }} to={`/businesses/${image.business_id}`}>
                                            <h4>{businesses[image.business_id].name}</h4>
                                            <img src={image.image_url} alt='images' className="img-size" />
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