import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getBizImagesThunk } from "../../store/images";
import UploadModal from "./UploadModal";
import DeleteImageModal from "./DeleteImageModal";


function ImageUploadPage(){

    const history = useHistory();
    const dispatch = useDispatch();
    const {businessId} = useParams();

    const images = useSelector(state => state.imageState);
    const imagesArr = Object.values(images);

    useEffect(() => {
        dispatch(getBizImagesThunk(parseInt(businessId)))
    }, [dispatch, businessId])

 

    const handleNext = () => {
        return history.push(`/businesses/${businessId}`)
    }



    return (
        <>
        <h1>Image Uploaded</h1>
        {imagesArr && imagesArr.map(({id, image_url}) => (
            <>
            <div className='background' key={id}>
                <div className="image_container" style={{ backgroundImage: `url(${image_url})` }}></div>
            </div>
            <DeleteImageModal key={id+1} businessId={businessId} imageId={id}/>
            </>
        ))}

        <h1>Ideally, please upload 4 images for your listing</h1>
        <div>
            <UploadModal businessId={businessId}/>
        </div>


        <div><button onClick={handleNext}>Complete</button></div>

        


        </>
    )
}

export default ImageUploadPage;