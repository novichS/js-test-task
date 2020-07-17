import { CREATE_RECIPE } from './types'

const initialState = {
    recipes: [],
    versions: []
}

export const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_RECIPE:
            return { ...state, recipes: state.posts.concat([action.payload]) }
        default: return state
    }
}