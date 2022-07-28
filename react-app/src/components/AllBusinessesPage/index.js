import { NavLink } from 'react-router-dom';
import '../Category/Category.css'
import { useDispatch, useSelector} from "react-redux";
import { useEffect } from 'react';
import { getAllImagesThunk } from '../../store/images';
import { getAllReviewThunk } from '../../store/reviews';
import placeholder from '../Category/placeholder.png'
import fiveEmpty from '../HomePage/fiveStarsEmpty.png'
import fiveFilled from '../HomePage/fiveStarsFilled.png'

import { getAllBusinessesThunk } from '../../store/businesses';
import MultiMapOverview from '../MultiMapOverview/MultiMapOverview';
const AllBusinessesPage = ({businesses}) => {
    const dispatch = useDispatch();
    const bizArr = Object.values(businesses)
    const imagesArr = Object.values(useSelector (state => state.imageState));
    const reviews = Object.values(useSelector(state => state.reviewState))

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

    const loadedPos = [];
    bizArr.forEach((biz)=> {
        loadedPos.push({lat: biz.latitude, lng: biz.longitude})
    })

    // console.log('++++++++++', process.env.REACT_APP_GOOGLE_MAP_API_ONE)
    console.log('++++++++++++++++', process.env.REACT_APP_GOOGLE_MAP_API_KEY);

    return imagesArr && (
        <div className='all-businesses-page-container'>
            <div className='searchResult'>
                <h2>All Restuarants</h2>
                {bizArr.map(business => (
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
                                    <p>Description: {business.description.slice(0, 95)}...</p>
                                    <p id="no-bottom">✔️ Delivery ✔️ Dine In ✔️ Take Out</p>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                ))
                }
            </div>
            <div className='google-map'>
                <MultiMapOverview setOfLatLng={loadedPos} />
            </div>
        </div>
    );
}


export default AllBusinessesPage