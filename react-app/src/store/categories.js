
//-----------------------ACTION CREATOR--------------------------

const GET_ALL_CATEGORIES = "category/GET_ALL_CATEGORIES"

const getAllCategories = (categories) => {
    return{
        type: GET_ALL_CATEGORIES,
        categories
    }
}

//-----------------------THUNK--------------------------

export const getAllCategoryThunk = () => async (dispatch) => {
    const response = await fetch(`/api/categories`);
    if (response.ok) {
        const categories = await response.json();
        // console.log("THIS IS CATEGORIES", categories)
        dispatch(getAllCategories(categories));
    }
}


//-----------------------REDUCER--------------------------
const initialState = {};

const categoryReducer = (state = initialState, action) => {
    let newState;
    switch (action.type){
        case GET_ALL_CATEGORIES:
            newState = {...state};
            action.categories.Categories.forEach(category => {
                newState[category.id] = category;
            });
            return newState;
        default:
            return state;
    }
}


export default categoryReducer;