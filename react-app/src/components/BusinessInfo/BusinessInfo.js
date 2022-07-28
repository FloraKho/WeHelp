import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { deleteReviewThunk, getReviewThunk } from '../../store/reviews';
import { getBusinessThunk } from '../../store/businesses'
import { getBizImagesThunk } from '../../store/images'
import ImagesGalleryModal from '../ImagesGallery';
import DeleteBusiness from '../DeleteBusiness/DeleteBusiness'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import SingleMapContainer from '../SingleMapContainer/SingleMapContainer';
import filterPic from './filterPic.png'
import fiveEmpty from '../HomePage/fiveStarsEmpty.png'
import fiveFilled from '../HomePage/fiveStarsFilled.png'
import { BsFillBookmarkStarFill } from "react-icons/bs";

import './BusinessInfo.css'

function BusinessInfo({ businesses, categories }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const { businessId } = useParams();
    const reviews = useSelector(state => state.reviewState);
    const images = useSelector(state => state.imageState);
    const imagesArr = Object.values(images);
    const singleBusiness = businesses[parseInt(businessId)];
    const currentUser = useSelector(state => state.session.user);
    const stars = Array(5).fill(0)
    const [isLoaded, setLoaded] = useState(false);
    const [users, setUsers] = useState([])
    const [hoverVal, setHoverVal] = useState(undefined);
    const businessOwner = singleBusiness?.user_id === currentUser?.id



    useEffect(() => {
        dispatch(getReviewThunk(parseInt(businessId)))
            .then(() => dispatch(getBusinessThunk(parseInt(businessId))))
            .then(() => dispatch(getBizImagesThunk(parseInt(businessId))))
            .then(() => dispatch(getReviewThunk(parseInt(businessId))))
            .then(() => setLoaded(true))
    }, [businessId])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/users/');
            const responseData = await response.json();
            setUsers(responseData.users);
        }
        fetchData();
    }, []);

    const colors = {
        red: "#FF0033",
        grey: "#a9a9a9"

    };

    const findUserName = (user_id) => {
        let result = users.filter(user => user.id == user_id);
        return result[0].username
    }

    const findUserPic = (user_id) => {
        let result = users.filter(user => user.id == user_id)
        return result[0].profile_pic
    }

    const handleEdit = () => {
        return history.push(`/businesses/${businessId}/edit`)
    }

    const handleAddReview = () => {
        return history.push(`/businesses/${businessId}/post-review`)
    }

    const handleAddPhoto = () => {
        return history.push(`/businesses/${businessId}/image-upload`)
    }

    const handleSeePhotos = () => {
        return history.push(`/businesses/${businessId}/images`)
    }

    const getAverage = (businessId) => {
        const currentReview = Object.values(reviews).filter(review => review.business_id == businessId)
        const ratings = currentReview.map(review => review.rating)
        const averageRating = (ratings.reduce((a, b) => a + b, 0) / ratings.length)
        return Math.floor(Number(averageRating))
    }

    const getPercentage = (businessId) => {
        let percent = (1 - getAverage(businessId) / 5).toFixed(2)
        return percent * 100
    }

    const getCategory = (id) => {
        return Object.values(categories)[id - 1]?.name
    }

    const handleMouseOver = newHoverValue => {
        setHoverVal(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverVal(undefined)
    }

    const geoloc = { latitude: singleBusiness?.latitude, longitude: singleBusiness?.longitude }

    return (
        isLoaded &&
        <div className='business-info-page'>

            <div className='all-imgs-container'>
                {imagesArr.slice(0, 4).map(({ id, image_url }) => (
                    <div key={id}>
                        <div className="image_container" style={{ backgroundImage: `url(${image_url})` }}></div>
                    </div>
                ))}
            </div>

            <div className='filter-pic' style={{ backgroundImage: `url(${filterPic})` }}></div>

            <div className='major-info'>
                <h1>{singleBusiness?.name}</h1>
                <div className='major-info-stars'>
                    <div>
                        <div className="fiveEmpty-biz">
                            <img src={fiveEmpty} />
                        </div>
                        <div className="fiveFilled-biz">
                            <img src={fiveFilled} style={{ right: `${getPercentage(singleBusiness?.id)}%` }} />
                        </div>
                    </div>
                    <p>{Object.values(reviews).length} reviews</p>
                </div>
                <div className='price-and-category'>
                    <p>☑️ <span id="blue-text">Recommended</span><span> · {singleBusiness?.price_range} ·</span> {getCategory(singleBusiness?.category_id)}</p>
                </div>
                <div className='opt-hours'>
                    <p>Operation Hours: {singleBusiness?.business_hours}</p>
                </div>
                <button id='see-photos' onClick={handleSeePhotos}>See {imagesArr.length} photos</button>
            </div>
            <div className='main-and-side'>
                <div className='main-content'>
                    <div className='add-review-photo'>
                        <div onClick={handleAddReview}>
                            <button id="write-a-review">
                                <i class="fa-regular fa-star fa-lg"></i> Write a review
                            </button>
                        </div>
                        <div onClick={handleAddPhoto}>
                            <button id="add-photo-button">
                                <i class="fa-solid fa-camera fa-lg"></i> Add Photo
                            </button>
                        </div>
                    </div>

                    <div className='location-and-hours'>
                        <h2>Location & Hours</h2>
                        <div className='location-and-hour-conatiner'>
                            <div className='location-left'>
                                <div className='left-map-container'>
                                    <SingleMapContainer latitude={geoloc.latitude} longitude={geoloc.longitude} />
                                </div>
                                <p>{singleBusiness?.address}, {singleBusiness?.city}, {singleBusiness?.zip_code} </p>
                            </div>
                            <div className='location-right'>
                                <div id='weekdays'>
                                    <p>Mon</p>
                                    <p>Tue</p>
                                    <p>Wed</p>
                                    <p>Thu</p>
                                    <p>Fri</p>
                                    <p>Sat</p>
                                    <p>Sun</p>
                                </div>
                                <div id='hours-weekday'>
                                    <p>{singleBusiness?.business_hours}</p>
                                    <p>{singleBusiness?.business_hours}</p>
                                    <p>{singleBusiness?.business_hours}</p>
                                    <p>{singleBusiness?.business_hours}</p>
                                    <p>{singleBusiness?.business_hours}</p>
                                    <p>{singleBusiness?.business_hours}</p>
                                    <p>{singleBusiness?.business_hours}</p>
                                    <div>
                                        {businessOwner ? (
                                            <div id="edit-biz-button" onClick={handleEdit}>
                                                <i class="fa-solid fa-pencil"></i> Edit business info
                                            </div>) : null}
                                    </div>
                                    {businessOwner ? (
                                        <div>
                                            <DeleteBusiness businessId={businessId} />
                                        </div>) : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="review-section">
                        <h2>Recommended Reviews</h2>
                        {currentUser && (
                            <div id="my-user-card">
                                <div className='review-profile' style={{ backgroundImage: `url(${findUserPic(currentUser.id)})` }}></div>
                                <div className="review-username">
                                    <p>{findUserName(currentUser.id)}</p>
                                    <p className='smaller-foodie'>new foodie</p>
                                </div>
                                <div id="ID-card-review">
                                    <div id="ID-rating-stars" onClick={handleAddReview}>
                                        {stars.map((_, index) => {
                                            return (
                                                <BsFillBookmarkStarFill
                                                    key={index}
                                                    size={35}
                                                    onMouseOver={() => handleMouseOver(index + 1)}
                                                    onMouseLeave={handleMouseLeave}
                                                    color={(hoverVal) > index ? colors.red : colors.grey}
                                                />
                                            )
                                        })}
                                    </div>
                                    <div id="ID-card-add-review" onClick={handleAddReview}>
                                        Start your review of {singleBusiness.name}.
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className='all-reviews'>
                            {Object.values(reviews).map(({ id, content, rating, user_id }) => (
                                <div className="ind-review" key={id}>
                                    <div className='ind-review-left'>
                                        <div className='ind-review-top'>
                                            <div className='review-profile' style={{ backgroundImage: `url(${findUserPic(user_id)})` }}></div>
                                            <div className="review-username">
                                                <p>{findUserName(user_id)}</p>
                                                <p className='smaller-foodie'>new foodie</p>
                                            </div>
                                            <div className='stars-in-review'>
                                                <div className="fiveEmpty-review">
                                                    <img src={fiveEmpty} />
                                                </div>
                                                <div className="fiveFilled-review">
                                                    <img src={fiveFilled} style={{ right: `${(1 - rating / 5) * 100}%` }} />
                                                </div>
                                            </div>
                                        </div>
                                        <p className='review-content'>{content}</p>
                                    </div>
                                    <div className='ind-review-right'>
                                        {currentUser?.id == user_id
                                            ?
                                            <div>
                                                <div id="info-edit-review"
                                                    onClick={
                                                        async (e) => {
                                                            e.preventDefault();
                                                            await history.push(`/edit-review/${id}`);
                                                        }
                                                    }
                                                    businessId={businessId}>
                                                    <i class="fa-solid fa-pencil"></i>
                                                </div>
                                                <div id="info-delete-review"
                                                    onClick={
                                                        async (e) => {
                                                            e.preventDefault();
                                                            await dispatch(deleteReviewThunk(id))
                                                                .then(() => dispatch(getReviewThunk(parseInt(businessId))));
                                                        }
                                                    }>
                                                    <i class="fa-solid fa-trash-can"></i>
                                                </div>
                                            </div>
                                            : <div></div>
                                        }
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='side-content'>
                    <div className='side-info'>
                        <p>{singleBusiness?.phone}</p>
                        <div className='side-content-icons'>
                            <i class="fa-solid fa-phone fa-lg"></i>
                        </div>
                    </div>
                    <div className='side-info'>
                        <p><a href={`${singleBusiness?.website}`}>{singleBusiness?.website}</a></p>
                        <div className='side-content-icons'>
                            <i class="fa-solid fa-square-up-right fa-lg"></i>
                        </div>
                    </div>
                    <div className='side-info'>
                        <p>{singleBusiness?.address}, {singleBusiness?.city}, {singleBusiness?.zip_code}</p>
                        <div className='side-content-icons'>
                            <i class="fa-solid fa-location-dot fa-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default BusinessInfo;