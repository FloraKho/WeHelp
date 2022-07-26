import { useEffect, useState } from "react";
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

    const [errors, setErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(() => {
        let errors = [];
        if (imagesArr.length === 0) errors.push("Please at least upload one image. \n Ideally, 4 images are perfect for your listing");
        setErrors(errors);
    }, [imagesArr])


    useEffect(() => {
        dispatch(getBizImagesThunk(parseInt(businessId)))
    }, [dispatch, businessId])




    const handleComplete = async (e) => {
        e.preventDefault();
        setHasSubmitted(true);
        if (!errors.length) {
            setHasSubmitted(false)
            return history.push(`/businesses/${businessId}`)
        }

    }



    return (
        <>
            <h1>Business Images: </h1>
            <div>
                {hasSubmitted && errors &&
                    <div>
                        {errors.map((error, idx) => <p className='error-text' key={idx}>* {error}</p>)}
                    </div>
                }
            </div>

            {imagesArr && imagesArr.map(({ id, image_url }) => (
                <>
                    <div className='background' key={id}>
                        <div className="image_container" style={{ backgroundImage: `url(${image_url})` }}></div>
                    </div>
                    <DeleteImageModal key={id + 1} businessId={businessId} imageId={id} />
                </>
            ))}




            <h1>Click Here to upload image:</h1>
            <div>
                <UploadModal businessId={businessId} />
            </div>


            <div><button onClick={handleComplete}>Complete Listing</button></div>




        </>
    )
}

export default ImageUploadPage;