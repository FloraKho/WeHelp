import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getBizImagesThunk } from "../../store/images";
import UploadModal from "../ImageUploadPage/UploadModal";


function ImagesPage({ businesses }) {


    const history = useHistory();
    const dispatch = useDispatch();

    const { businessId } = useParams();

    const currentBiz = businesses[businessId];
    console.log(currentBiz);


    const images = useSelector(state => state.imageState);
    const imagesArr = Object.values(images);

    useEffect(() => {
        dispatch(getBizImagesThunk(parseInt(businessId)))
    }, [dispatch, businessId])

    return (

        <>
            <div>
                <div><h2>Photos for {currentBiz?.name}</h2></div>
                <UploadModal />
                <div>
                    <button onClick={() => history.goBack()}>Go Back</button>
                </div>
            </div>

            <div >
                {imagesArr && imagesArr.map((image) => {
                    return (
                        <div key={image.id}>
                            <img src={image.image_url} alt='images' />
                        </div>
                    )
                })}
            </div>
        </>

    )

}


export default ImagesPage;