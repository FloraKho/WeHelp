import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getBizImagesThunk } from "../../store/images";
import UploadModal from "../ImageUploadPage/UploadModal";
import DeleteImageModal from "../ImageUploadPage/DeleteImageModal";
import ImagesGalleryModal from '../ImagesGallery';
import './ImagesPage.css'

function ImagesPage({ businesses }) {


    const history = useHistory();
    const dispatch = useDispatch();

    const { businessId } = useParams();

    const currentBiz = businesses[businessId];
    const sessionUser = useSelector(state => state.session.user)
    const currentUserId = sessionUser?.id;


    const images = useSelector(state => state.imageState);
    const imagesArr = Object.values(images);

    useEffect(() => {
        dispatch(getBizImagesThunk(parseInt(businessId)))
    }, [dispatch, businessId])

    const handleAddPhoto = () => {
        return history.push(`/businesses/${businessId}/image-upload`)
    }


    return (

        <>
            <div><h2>Photos for {currentBiz?.name}</h2></div>
            <div className="add-photo-pg-container">
                <div>
                    <button onClick={handleAddPhoto}>
                        Manage Photos
                    </button>
                </div>
                <div>
                    <button onClick={() => history.goBack()}>Go Back</button>
                </div>
            </div>
            {/* <div>
                <ImagesGalleryModal imagesArr={imagesArr}/>
            </div> */}
            <div className="img-div">
                {imagesArr && imagesArr.map((image) => {
                    return (
                        <div key={image.id}>
                            <img src={image.image_url} alt='images' className="img-size"/>
                            {/* { image.user_id === currentUserId && (
                                <DeleteImageModal businessId={businessId} imageId={image.id}/> )} */}
                        </div>
                    )
                })}
            </div>
        </>

    )

}


export default ImagesPage;