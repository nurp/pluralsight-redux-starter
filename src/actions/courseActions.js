// Add course related actions in this file.
export const actionTypes = {
    CREATE_COURSE: 'CREATE_COURSE'
};

export function createCourse(course) {
    return {
        type: actionTypes.CREATE_COURSE,
        course //because right hand side matches the lhs in es6, we can write this.
    };
}