// import { csrfFetch } from "./csrf";

const ADD_REVIEW = "review/ADD_REVIEW"
const GET_REVIEW = "review/GET_REVIEW"
const EDIT_REVIEW = "review/EDIT_REVIEW"
const DELETE_REVIEW = "review/DELETE_REVIEW"

const addReview = (review) => {
    return {
        type: ADD_REVIEW,
        review
    }
}

const getReviews = (reviews) => {
    return {
        type: GET_REVIEW,
        reviews
    }
}


const editReviews = (reviewId, review) => {
    return {
        type: EDIT_REVIEW,
        reviewId, review
    }
}

const deleteReview = (reviewId) => {
    return {
        type: DELETE_REVIEW,
        reviewId
    }
}


//thunk
//C
export const addReviewThunk = (review) => async (dispatch) => {
    const response = await fetch(`/api/reviews`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review),
    });

    if (response.ok) {
        const newReview = await response.json();
        dispatch (addReview(newReview));
        return newReview;
    }
};

//R
export const getReviewThunk = (businessId) => async (dispatch) => {
    const response = await fetch(`/api/reviews/biz/${businessId}`);

    if (response.ok) {
        const comments = await response.json();
        dispatch(getReviews(comments, businessId));
    }
}


//U
export const updateReviewThunk = (reviewId, review) => async (dispatch) => {
    const { body } = review;
    const response = await fetch(`/api/reviews/${reviewId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body })
    })
    if (response.ok) {
        const review = await response.json()
        dispatch(editReviews(reviewId, review))
    }
}


//D
export const deleteReviewThunk = (reviewId) => async (dispatch) => {
    const response = await fetch(`/api/creviews/${reviewId}`, {
        method: 'DELETE',
    })

    if (response.ok) {
        const deletedReviewId = await response.json();
        dispatch(deleteReview(deletedReviewId));
        return deletedReviewId;
    }
}


const initialState = { reviews: {} };

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REVIEW:
            const loadedReviews = { ...state, reviews: { ...state.reviews } };
            action.reviews.Reviews.forEach(
                (review) => (loadedReviews.reviews[review.id] = review));
            return loadedReviews;
        case DELETE_REVIEW:
            const newState = { ...state };
            delete newState.reviews[action.reviewId];
            return newState;
        case EDIT_REVIEW: {
            let baseState = { ...state };
            baseState.reviews[action.reviewId] = action.review;
            return baseState;
        }
        case ADD_REVIEW:
            return { ...state, [action.review.id]: action.review };
        default:
            return state;
    }
};

export default reviewReducer;