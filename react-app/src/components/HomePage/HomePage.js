import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllImagesThunk } from '../../store/images'
import { getAllReviewThunk } from "../../store/reviews";
import './HomePage.css'
import starFilled from './starFilled.png'
import starEmpty from './starEmpty.png'
import fiveFilled from './fiveStarsFilled.png'
import fiveEmpty from './fiveStarsEmpty.png'
import ReactStars from "react-rating-stars-component";



const HomePage = ({businesses, categories}) => {
    const bizArr = Object.values(businesses).slice(0,6) //this will be the top five resturants that have the highest ratings
    const dispatch = useDispatch();
    const images = useSelector (state => state.imageState);
    const reviews = Object.values(useSelector(state => state.reviewState.reviews))
    const imageArr = Object.values(images);
    const categoriesArr = Object.values(categories).map(category => category.name)

    useEffect(() => {
        dispatch(getAllImagesThunk())
        dispatch(getAllReviewThunk())
    }, [])

    const findProfilePic = (number) => {
        return imageArr.filter(image => image.business_id == number)[0]
    }

    const getAverage = (businessId) => {
        const currentReview = reviews.filter(review => review.business_id == businessId)
        const ratings = currentReview.map(review => review.rating)
        const averageRating = (ratings.reduce((a,b) => a + b, 0)/ratings.length).toFixed(2)
        return Number(averageRating)
    }

    return (
        <>
            <div>THIS IS SEARCH BAR</div>
            <div className="banner" style={{backgroundImage: `url(https://cdn.sortiraparis.com/images/80/95878/693086-photos-mohamed-cheikh-top-chef-2021-a-la-pagode-de-cos-de-la-reserve.jpg)`}}></div>
            <div className="recommendations">
                <h2>Recommend For you</h2>
                <div className="business_card_container">
                    {bizArr.map(business => (
                        <div className="business_card">
                            <div className="business_card_left" style={{backgroundImage:`url(${findProfilePic(business.id)?.image_url})`}}></div>
                            <div className="business_card_right">
                                <p className="business_name">{business.name}</p>
                                {/* <p>{getAverage(business.id)}</p>  */}
                                <div className="fiveEmpty">
                                    <img src={fiveEmpty}/>
                                </div>
                                <div className="fiveFilled">
                                    <img src={fiveFilled}/>
                                </div>
                                {/* <ReactStars
                                    count={5}
                                    size={24}
                                    emptyIcon={<img src={starEmpty}/>}
                                    fullIcon={<img src={starFilled}/>}
                                    edit={false}
                                 /> */}
                                <p className="business_description">{business.description.slice(0, 100)}...</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="categories">
                <h2>Categories</h2>
                <div className="categories_container">
                    {/* {categoriesArr.map(category => (
                        <div className="category_card">
                            <p></p>
                            {category}
                        </div>
                    ))} */}
                    <div className="single_category">
                        <p className="category_icon">🍲</p>
                        <p>Chinese</p>
                    </div>
                    <div className="single_category">
                        <p className="category_icon">🥘</p>
                        <p>Korean</p>
                    </div>
                    <div className="single_category">
                        <p className="category_icon">🍣</p>
                        <p>Japanese</p>
                    </div>
                    <div className="single_category">
                        <p className="category_icon">🍛</p>
                        <p>Thai</p>
                    </div>
                    <div className="single_category">
                        <p className="category_icon">🍜</p>
                        <p>Vietnamese</p>
                    </div>
                    <div className="single_category">
                        <p className="category_icon">🌮</p>
                        <p>Mexican</p>
                    </div>
                    <div className="single_category">
                        <p className="category_icon">🍝</p>
                        <p>Italian</p>
                    </div>
                    <div className="single_category">
                        <p className="category_icon">☕</p>
                        <p>Coffee & Tea</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomePage;