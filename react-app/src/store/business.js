import { csrfFetch } from "./csrf";

const ADD_BUSINESS = "business/ADD_BUSINESS"
const GET_BUSINESS = "business/GET_BUSINESS"
const GET_ALL_BUSINESSES = "business/GET_ALL_BUSINESSES"
const EDIT_BUSINESS = "business/EDIT_BUSINESS"
const DELETE_BUSINESS = "business/DELETE_BUSINESS"

//action creator
const addBusiness = (business) => {
    return {
        type: ADD_BUSINESS,
        business
    }
}

const getBusiness = (business) => {
    return {
        type: GET_BUSINESS,
        business
    }
}

const getAllBusinesses = (businesses) => {
    return {
        type: GET_ALL_BUSINESSES,
        businesses
    }
}

const editBusiness = (business) => {
    return {
        type: EDIT_BUSINESS,
        business
    }
}

const deleteBusiness = (businessId) => {
    return {
        type: DELETE_BUSINESS,
        businessId
    }
}


//thunk
export const addBusinessThunk = (business) => async (dispatch) => {
    // const { user_id, name, description, category_id, address, city, state, zip_code, phone, website, price_range, business_hours, latitude, longitude } = business;
    const response = await csrfFetch(`/api/businesses`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(business),
    });

    if (response.ok) {
        const newBusiness = await response.json();
        dispatch(addBusiness(newBusiness));
        return newBusiness;
    }
}

export const getAllBusinessesThunk = () => async (dispatch) => {
    const response = await csrfFetch(`/api/businesses`);
    if (response.ok) {
        const businesses = await response.json();
        dispatch(getAllBusinesses(businesses));
    }
}


export const getBusinessThunk = (businessId) => async (dispatch) => {
    const response = await csrfFetch(`/api/businesses/${businessId}`);

    if (response.ok) {
        const business = await response.json();
        dispatch(getBusiness(business));
    }
}


export const editBusinessThunk = (business) => async (dispatch) => {
    const response = await csrfFetch(`/api/businesses/${business.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(business)
    })
    if (response.ok) {
        const newBusiness = await response.json();
        dispatch(editBusiness(newBusiness));
        return newBusiness;
    }
}


export const deleteBusinessThunk = (businessId) => async (dispatch) => {
    const response = await csrfFetch(`/api/businesses/${businessId}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        dispatch(deleteBusiness(businessId));
    }
}

//reducer

const initialState = {};

const businessReducer = (state = initialState, action) => {
    let newState;
    switch (action.type){
        case GET_BUSINESS:
            newState = { ...state };
            newState[action.business.id] = action.business;
            return newState;
        case GET_ALL_BUSINESSES:
            newState = {};
            action.businesses.forEach(business => {
                newState[business.id] = business;
            });
            return newState;
        case ADD_BUSINESS:
            return {
                ...state,
                [action.business.id]: action.business
            };
        case EDIT_BUSINESS:
            return {
                ...state,
                [action.business.id]: action.business
            };
        case DELETE_BUSINESS:
            newState = { ...state }
            delete newState[action.businessId];
            return newState;
        default:
            return state;
    }
}

export default businessReducer;