import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getBizImagesThunk } from "../../store/images";
import UploadModal from "./UploadModal";
import DeleteImageModal from "./DeleteImageModal";
import './ImageUploadPage.css'


function ImageUploadPage({ businesses }) {

    const history = useHistory();
    const dispatch = useDispatch();
    const { businessId } = useParams();

    const images = useSelector(state => state.imageState);
    const imagesArr = Object.values(images);
    const sessionUser = useSelector(state => state.session.user)
    const currentUserId = sessionUser?.id;
    const currentBusiness = businesses[businessId];

    const photosArr = imagesArr.filter(image => image.user_id === +currentUserId)
    const businessOwner = currentBusiness?.user_id === +currentUserId;

    const [errors, setErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(() => {
        let errors = [];
        if (photosArr.length < 4 && businessOwner) errors.push("Business owner must upload at least 4 images!");
        setErrors(errors);
    }, [photosArr.length, businessOwner])

    useEffect(() => {
        dispatch(getBizImagesThunk(parseInt(businessId)))
    }, [dispatch, businessId])

    const handleComplete = (e) => {
        e.preventDefault();
        setHasSubmitted(true);
        if (!errors.length) {
            setHasSubmitted(false)
            setErrors([])
            return history.push(`/businesses/${businessId}`)
        }
    }

    return (
        <div className="image-upload-page">
            <div className="image-upload-top">
                <h1>Add Photos: </h1>
                <div className="image-upload-top-buttons">
                    <div>
                        <UploadModal businessId={businessId} />
                    </div>
                    <div>
                        <button id="complete-button" onClick={handleComplete} >
                            <i class="fa-regular fa-circle-check fa-lg"></i> Complete
                        </button>
                    </div>
                </div>
            </div>
            <div>
                {hasSubmitted && errors &&
                    <div>
                        {errors.map((error, idx) => <p className='error-text' key={idx}>* {error}</p>)}
                    </div>
                }
            </div>
            {photosArr.length === 0 && (
                <p>You don't have any photo uploaded!</p>
            )}

            <div className="img-div">
                {photosArr && photosArr.map((image) => {
                    return (
                        <div key={image.id}>
                            <div className="img-upload" style={{ backgroundImage: `url(${image.image_url})` }}></div>
                            {image.user_id === currentUserId && (
                                <DeleteImageModal businessId={businessId} imageId={image.id} />)}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ImageUploadPage;