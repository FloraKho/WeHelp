import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllImagesThunk } from '../../store/images'
import './HomePage.css'


const HomePage = ({businesses, categories}) => {
    const bizArr = Object.values(businesses).slice(0,6) //this will be the top five resturants that have the highest ratings
    const dispatch = useDispatch();
    const images = useSelector (state => state.imageState);
    const imageArr = Object.values(images);

    useEffect(() => {
        dispatch(getAllImagesThunk())
    }, [])

    const findProfilePic = (number) => {
        return imageArr.filter(image => image.business_id == number)[0]
    }

    return (
        <>
            <div>THIS IS SEARCH BAR</div>
            <div>Banner</div>
            <div>
                <h2>Recommend For you</h2>
                <div>
                    {bizArr.map(business => (
                        <div className="business_card">
                            <div className="business_card_left" style={{backgroundImage:`url(${findProfilePic(business.id)?.image_url})`}}></div>
                            <div className="business_card_right">
                                <p>{business.name}</p>
                                <p>average rating: </p>
                                <p>{business.description.slice(0, 100)}...</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>categories</div>
        </>
    )
}
export default HomePage;