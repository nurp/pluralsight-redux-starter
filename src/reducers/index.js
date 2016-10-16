import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    //include all the reducers defined in our application.
    courses //in other files, when accessing, use state.courses so be careful choosing property name here.
    // or courses: courses same
});

export default rootReducer;