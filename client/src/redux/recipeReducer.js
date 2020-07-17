import {
    GET_RECIPES,
    DELETE_RECIPE,
    UPDATE_RECIPE,
    SET_ACTIVE_RECIPE,
    SET_ACTIVE_VERSION,
    DELETE_VERSION
} from './types'

export const recipeReducer = (state = [], {type, payload}) => {
    switch (type) {

        case GET_RECIPES:
            return payload.slice().reverse()
                .map(recipe => ({
                    ...recipe,
                    oldRecipe: recipe.oldRecipe.slice().reverse()
                })
                );

        case DELETE_RECIPE:
            return state.filter(recipe =>
                recipe._id !== payload);

        case SET_ACTIVE_RECIPE:
            return state.map(recipe => {
                recipe.id === payload
                    ? recipe = { ...recipe, isToggled: true }
                    : recipe = { ...recipe, isToggled: false }
                return recipe;
            });

        case UPDATE_RECIPE:
            return state.map(recipe => {
                if (recipe._id === payload.edited._id) {
                    return {
                        ...recipe,
                        name: payload.edited.name,
                        id: payload.edited.id,
                        ingredients: payload.edited.ingredients,
                        date: new Date(payload.edited.id).toString().substr(0, 24),
                        oldRecipe: [payload.oldRecipes, ...recipe.oldRecipe]
                    }
                }
                return recipe;
            });

        case SET_ACTIVE_VERSION:
            return state.map(recipe => {
                if (recipe.isToggled) {
                    return {
                        ...recipe,
                        oldRecipe: recipe.oldRecipe
                            .map(version => {
                                version.id === payload
                                    ? version = { ...version, isToggled: true }
                                    : version = { ...version, isToggled: false }
                                return version;
                            })
                    }
                }
                return recipe;
            });

        case DELETE_VERSION:
            return state.map(recipe => {
                if (recipe.isToggled) {
                    return {
                        ...recipe,
                        oldRecipe: recipe.oldRecipe
                            .filter(version => version.id !== payload.id)
                    }
                }
                return recipe;
            });

        default:
            return state
    }
}