import { NavLink} from 'react-router-dom';
import './AllBiz.css'
import { useDispatch, useSelector} from "react-redux";
import { useEffect } from 'react';
import { getAllImagesThunk } from '../../store/images';
import { getAllBusinessesThunk } from '../../store/businesses';
import MultiMapOverview from '../MultiMapOverview/MultiMapOverview';
const AllBusinessesPage = ({businesses}) => {
    const dispatch = useDispatch();
    const bizArr = Object.values(businesses)
    const imagesArr = Object.values(useSelector (state => state.imageState));
    
    useEffect(() => {
        dispatch(getAllImagesThunk())
    }, [])

    const findProfilePic = (number) => {
        return imagesArr.filter(image => image.business_id == number)[0]
    }

    const loadedPos = [];
    bizArr.forEach((biz)=> {
        loadedPos.push({lat: biz.latitude, lng: biz.longitude})
        // console.log('line24')
    })
    return (
        <div className='all-businesses-page-container'>
            <div>
                <h1>FILTER BAR放这</h1>
            </div>
            <div>
                { bizArr.map(business => (
                    <NavLink key={business.id}
                        to={`businesses/${business.id}`}
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
                <MultiMapOverview setOfLatLng={loadedPos} />
            </div>
        </div>
    );
}


export default AllBusinessesPage