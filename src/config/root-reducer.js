import { combineReducers } from 'redux';

import MainContainer from '../App/containers/main-container/main-container.reducer';

const rootReducer = combineReducers({
    Main: MainContainer
});

export default rootReducer;