import React, { useState } from 'react';
import { ImagesModal } from '../../context/ImagesModal';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./ImagesGalleryModal.css"
import prev from './prev.png'
import next from './next.png'
function ImagesGalleryModal({ imagesArr }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);
    const [curr, setCurr] = useState(0)

    const prevSlide = () => {
        setCurr( curr === 0? imagesArr.length - 1: curr - 1)// if curr is the last set to 0, else set curr += 1
    }

    const nextSlide = () => {
        setCurr( curr === imagesArr.length - 1? 0: curr + 1)// if curr is the last set to 0, else set curr += 1
    }
    console.log(curr)

    if (imagesArr.length <= 0){
        return (
            <h1>Currently No Images to Display</h1>
        )
    }

    return (
        <>
            <div>
                <button onClick={() => setShowModal(true)}>View All Photos</button>
            </div>
            {showModal && (
                <ImagesModal onClose={() => setShowModal(false)}>
                    <div className='imgs-slider-container'>
                        <img src={prev} alt="prev" className="left-arrow" onClick={prevSlide}></img>
                        <img src={next} alt="next" className="right-arrow" onClick={nextSlide}></img>
                        {imagesArr.map((image, index) => (
                            <div className={index === curr ? 'slide active': 'slide'} key={index}> 
                                { index === curr &&
                                    <div className="slider-image" style={{ backgroundImage: `url(${image.image_url})` }}></div>
                                }
                            </div>
                        ))}
                        <div className='img-info-container'>
                            <p>Photos for 店名儿</p>
                            <p>{`${curr + 1} of ${imagesArr.length}`}</p>
                            <p>From 人名儿</p>
                        </div>
                    </div>
                </ImagesModal>
            )}
        </>
    )
}

export default ImagesGalleryModal;