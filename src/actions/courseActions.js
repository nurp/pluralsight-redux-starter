// Add course related actions in this file.
import courseApi from '../api/mockCourseApi';
import * as types from './actionTypes';

export function createCourse(course) {
    return {
        type: types.CREATE_COURSE,
        course //because right hand side matches the lhs in es6, we can write this.
    };
}

export function loadCoursesSuccess(courses) {
    return {
        type: types.LOAD_COURSES_SUCCESS,
        courses
    };
}

export function loadCourses() {
    return function (dispatch) {
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw (error);
        });
    };
}