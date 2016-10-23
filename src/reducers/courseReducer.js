//take state and action, return a new state
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {//empty array means, I start with empty courses
    switch (action.type) {
        case types.CREATE_COURSE:
            return [...state,  //spread the state array here
            Object.assign({}, action.course)]; //create deep copy of action.course
        //returning a new array with the new course passed in.
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        default:
            return state;
    }
}