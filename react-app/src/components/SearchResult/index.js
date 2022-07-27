import React from "react";
import { NavLink, useParams } from "react-router-dom";
import '../AllBusinessesPage/AllBiz.css'
import { useDispatch, useSelector} from "react-redux";
import { useEffect } from 'react';
import { getAllImagesThunk } from '../../store/images';
import { getAllBusinessesThunk } from '../../store/businesses';
import MultiMapOverview from "../MultiMapOverview/MultiMapOverview";


const SearchResult = ({businesses}) => {
    const dispatch = useDispatch();
    const {searchterms} = useParams()
    const searchArr = searchterms.split(' ')
    const bizArr = Object.values(businesses)
    const imagesArr = Object.values(useSelector (state => state.imageState));
    const filter_biz = bizArr.filter(business => business.name.toLowerCase().includes(searchArr[0].toLowerCase()))
    // console.log("THIS IS FILTERED BIZ", filter_biz)

    const loadedPos = [];
    filter_biz.forEach((biz) => {
        loadedPos.push({ lat: biz.latitude, lng: biz.longitude })
        // console.log('line24')
    })

    useEffect(() => {
        dispatch(getAllImagesThunk())
    }, [])

    const findProfilePic = (number) => {
        return imagesArr.filter(image => image.business_id == number)[0]
    }
    if(filter_biz.length === 0){
        return (
            <h1>Oops! No Restuarant Found!!!</h1>
        )
    }
    return (
        <div className='all-businesses-page-container'>
            <div>
                <h1>FILTER BAR放这</h1>
            </div>
            <div>
                { filter_biz.map(business => (
                    <NavLink key={business.id}
                        to={`/businesses/${business.id}`}
                        style={{ textDecoration: 'none', color: 'black' }}>
                        <div className='individual-business-listing-container'>
                        <div className='cat-image-container' style={{ backgroundImage: `url(${findProfilePic(business.id)?.image_url})` }}></div>
                            <div>
                                <p>{business.name}</p>
                                <p>{'这里放category'}</p>
                                <p>Open Hour : {business.business_hours}</p>
                                <p>{business.description}</p>
                                <hr></hr>     
                                <p>✔️ Delivery ✔️ Dine In ✔️ Take Out</p>
                            </div>
                        </div>
                    </NavLink>
                ))
                    }
            </div>
            <div>
                <MultiMapOverview setOfLatLgn = {loadedPos}/>
            </div>
        </div>
    )
}

export default SearchResult;

