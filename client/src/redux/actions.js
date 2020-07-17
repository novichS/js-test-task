import axios from 'axios';
import {
    GET_RECIPES,
    ADD_RECIPE,
    DELETE_RECIPE,
    UPDATE_RECIPE,
    SET_ACTIVE_RECIPE,
    SET_ACTIVE_VERSION,
    DELETE_VERSION
} from './types';

export const getRecipesAction = () => async dispatch => {
    await axios.get('/api/recipe')
        .then(response => response.data)
        .then(payload => dispatch({ type: GET_RECIPES, payload }))
};

export const addRecipeAction = (payload) => async dispatch => {
    await axios.post('/api/recipe/add', payload)
        .then(response => console.log(response.data))
        .then(() => dispatch({ type: ADD_RECIPE }))
        .then(() => dispatch(getRecipesAction()))
        .then(() => console.log('Recipes fetched!'));
};

export const deleteRecipeAction = (payload) => async dispatch => {
    await axios.delete(`/api/recipe/${payload}`)
        .then(response => console.log(response.data));

    dispatch({
        type: DELETE_RECIPE,
        payload
    });
};

export const updateRecipeAction = (payload) => async dispatch => {
    await axios.post(`/api/recipe/update/${payload.edited._id}`, payload)
        .then(response => console.log(response.data));

    dispatch({
        type: UPDATE_RECIPE,
        payload
    });
};

export const setActiveRecipeAction = (payload) => ({
    type: SET_ACTIVE_RECIPE,
    payload
});

export const setActiveVersionAction = (payload) => ({
    type: SET_ACTIVE_VERSION,
    payload
});

export const deleteVersionAction = (payload) => async dispatch => {
    await axios.post(`/api/recipe/version/${payload._id}`, payload)
        .then(response => console.log(response.data));

    dispatch({
        type: DELETE_VERSION,
        payload
    })
};