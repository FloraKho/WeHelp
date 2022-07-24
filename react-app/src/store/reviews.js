import { csrfFetch } from "./csrf";

const ADD_REVEIW = "review/ADD_REVIEW"
const GET_REVIEW = "review/GET_REVIEW"
const EDIT_REVIEW = "review/EDIT_REVIEW"
const DELETE_REVIEW = "review/DELETE_REVIEW"

const addReview = (review) => {
    return {
        type: ADD_REVIEW,
        review
    }
}

const getReview = (review) => {
    return {
        type: GET_REVIEW,
        review
    }
}


const getAllReviews = (reviews) => {
    return {
        type: GET_REVIEW,
        reviews
    }
}

const deleteReview = (reviewsId) => {
    return {
        type: DELETE_REVIEW,
        reviewsId
    }
}


//thunk
//C
export const addReviewThunk = (review, businessId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews`, {
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
    const response = await csrfFetch(`/api/biz/${businessId}`);

    if (response.ok) {
        const comments = await response.json();
        dispatch(loadall(comments, postId));
    }
}


//U
export const updateReviewThunk = (reviewId, review) => async (dispatch) => {
    const { body } = review;
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body })
    })
    if (response.ok) {
        const review = await response.json()
        dispatch(update(review))
    }
}


//D
export const deleteReviewThunk = (reviewId) => async (dispatch) => {
    const response = await csrfFetch(`/api/creviews/${reviewId}`, {
        method: 'DELETE',
    })

    if (response.ok) {
        const deletedReviewId = await response.json();
        dispatch(remove(deletedReviewId));
        return deletedReviewId;
    }
}
