const ADD_IMAGE = "image/ADD_IMAGE"
const GET_BIZ_IMAGES = "image/GET_BIZ_IMAGES"
const DELETE_IMAGE = "image/DELETE_IMAGE"
const GET_ALL_IMAGES = "image/GET_ALL_IMAGES"

const addImage = (image) => {
    return {
        type: ADD_IMAGE,
        image
    }
}

const getBizImages = (images) => {
    return {
        type: GET_BIZ_IMAGES,
        images
    }
}

const deleteImage = (imageId) => {
    return {
        type: DELETE_IMAGE,
        imageId
    }
}

const getAllImages = (images) => {
    return {
        type: GET_ALL_IMAGES,
        images
    }
}

//thunk
export const addImageThunk = (image) => async (dispatch) => {
    const response = await fetch(`/api/business_images`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(image)
    });

    if (response.ok) {
        const newImage = await response.json();
        dispatch(addImage(newImage));
        return newImage;
    }
}

export const getBizImagesThunk = (bussinessId) => async (dispatch) => {
    const response = await fetch (`/api/business_images/biz/${bussinessId}`)
    if (response.ok) {
        const images = await response.json();
        dispatch(getBizImages(images));
    }
}

export const deleteImageThunk = (imageId) => async (dispatch) => {
    const response = await fetch(`/api/business_images/${imageId}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        dispatch(deleteImage(imageId));
    }
}

export const getAllImagesThunk = () => async (dispatch) => {
    const response = await fetch('/api/business_images/all')
    if (response.ok) {
        const images = await response.json();
        dispatch(getAllImages(images));
    }
}

//reducer

const initialState = {};

const imageReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case ADD_IMAGE:
            return {
                ...state,
                [action.image.id]: action.image
            };
        case GET_BIZ_IMAGES:
            newState = {};
            action.images.Business_Images.forEach(image => {
                newState[image.id] = image;
            });
            return newState;
        case GET_ALL_IMAGES:
            newState = {};
            action.images.Business_Images.forEach(image => {
                newState[image.id] = image;
            });
            return newState;
        case DELETE_IMAGE:
            newState = { ...state }
            delete newState[action.imageId];
            return newState;
        default:
            return state;
    }
}

export default imageReducer;