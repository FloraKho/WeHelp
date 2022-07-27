import React from "react";
import { NavLink, useParams } from "react-router-dom";
import '../AllBusinessesPage/AllBiz.css'
import { useDispatch, useSelector} from "react-redux";
import { useEffect } from 'react';
import { getAllImagesThunk } from '../../store/images';
import { getAllReviewThunk } from '../../store/reviews';
import '../Category/Category.css'
import placeholder from '../Category/placeholder.png'
import fiveEmpty from '../HomePage/fiveStarsEmpty.png'
import fiveFilled from '../HomePage/fiveStarsFilled.png'
import { getAllBusinessesThunk } from '../../store/businesses';
import MultiMapOverview from "../MultiMapOverview/MultiMapOverview";


const SearchResult = ({businesses}) => {
    const dispatch = useDispatch();
    const {searchterms} = useParams()
    const searchArr = searchterms.split(' ')
    const reviews = Object.values(useSelector(state => state.reviewState))
    const bizArr = Object.values(businesses)
    const imagesArr = Object.values(useSelector (state => state.imageState));
    const filter_biz = bizArr.filter(business => business.name.toLowerCase().includes(searchArr[0].toLowerCase()))

    const loadedPos = [];
    filter_biz.forEach((biz) => {
        loadedPos.push({ lat: biz.latitude, lng: biz.longitude })
        // console.log('line24')
    })

    useEffect(() => {
        dispatch(getAllImagesThunk())
        dispatch(getAllReviewThunk())
    }, [])

    const findProfilePic = (number) => {
        return imagesArr.filter(image => image.business_id == number)[0]
    }

    const getAverage = (businessId) => {
        const currentReview = reviews.filter(review => review.business_id == businessId)
        const ratings = currentReview.map(review => review.rating)
        const averageRating = (ratings.reduce((a, b) => a + b, 0) / ratings.length)
        return Math.floor(Number(averageRating))
    }

    const getPercentage = (businessId) => {
        let percent = (1 - getAverage(businessId) / 5).toFixed(2)
        return percent * 100
    }

    if(filter_biz.length === 0){
        return (
            <div className="no-result">
                <div className="wrong-pic" style={{ backgroundImage: `url(https://cdn.dribbble.com/users/2155753/screenshots/6716126/error_prancheta_1_co_pia.png)` }}></div>
                <p>Oops! No Result Found!! Please Try Another Key Word!
                </p>
            </div>
        )
    }

    return imagesArr && (
        <div className='all-businesses-page-container'>
        <div className='searchResult'>
            <h2>All Results For {searchterms}</h2>
            {filter_biz.map(business => (
                <NavLink key={business.id}
                    to={`/businesses/${business.id}`}
                    style={{ textDecoration: 'none', color: 'black' }}>
                    <div className='individual-business-listing-container'>
                        <div className='cat-image-container' style={{ backgroundImage: `url(${findProfilePic(business.id)?.image_url})` }}></div>
                        <div className='cat-text-container'>
                            <p id='biz-name'>{business.name}</p>
                            <div className="fiveEmpty">
                                <img src={fiveEmpty} />
                            </div>
                            <div className="fiveFilled">
                                <img src={fiveFilled} style={{ right: `${getPercentage(business.id)}%` }} />
                            </div>
                            <div className="cat-text-lower">
                                <p>Open Hours: {business.business_hours}</p>
                                <p>Description: {business.description.slice(0, 100)}...</p>
                                <p id="no-bottom">✔️ Delivery ✔️ Dine In ✔️ Take Out</p>
                            </div>
                        </div>
                    </div>
                </NavLink>
            ))
            }
        </div>
        <div className='google-map'>
            <MultiMapOverview setOfLatLgn = {loadedPos}/>
        </div>
    </div>
    )
}

export default SearchResult;

