import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { recipeReducer } from './redux/recipeReducer';

export default createStore(recipeReducer, [], composeWithDevTools(applyMiddleware(thunk)));