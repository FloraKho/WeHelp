import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getBizImagesThunk } from "../../store/images";
import UploadModal from "./UploadModal";
import DeleteImageModal from "./DeleteImageModal";



function ImageUploadPage() {

    const history = useHistory();
    const dispatch = useDispatch();
    const { businessId } = useParams();

    const images = useSelector(state => state.imageState);
    const imagesArr = Object.values(images);
    const sessionUser = useSelector(state => state.session.user)
    const currentUserId = sessionUser.id;

    const photosArr = imagesArr.filter(image => image.user_id === +currentUserId)

    // const [errors, setErrors] = useState([]);
    // const [hasSubmitted, setHasSubmitted] = useState(false);

    // useEffect(() => {
    //     let errors = [];
    //     if (imagesArr.length === 0) errors.push("Please at least upload one image.");
    //     setErrors(errors);
    // }, [])


    useEffect(() => {
        dispatch(getBizImagesThunk(parseInt(businessId)))
    }, [dispatch, businessId])

    const handleComplete = (e) => {
        e.preventDefault();
        return history.push(`/businesses/${businessId}`)
    }

    return (
        <>
            <h1>Add Photos: </h1>
            <div>
                <UploadModal businessId={businessId} />
            </div>
            {/* <div>
                {hasSubmitted && errors &&
                    <div>
                        {errors.map((error, idx) => <p className='error-text' key={idx}>* {error}</p>)}
                    </div>
                }
            </div> */}
            {photosArr.length === 0 && (
                <p>You don't have any photo uploaded!</p>
            )}
            <div className="img-div">
                {photosArr && photosArr.map((image) => {
                        return (
                            <div key={image.id}>
                                <img src={image.image_url} alt='images' className="img-size"/>
                                { image.user_id === currentUserId && (
                                    <DeleteImageModal businessId={businessId} imageId={image.id}/> )}
                            </div>
                        )
                    })}
            </div>
            <h1>Click below to complete your upload.</h1>
            <div><button onClick={handleComplete} disabled={imagesArr.length===0}>Complete</button></div>
        </>
    )
}

export default ImageUploadPage;