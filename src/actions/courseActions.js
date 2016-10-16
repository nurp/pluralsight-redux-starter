// Add course related actions in this file.

export function createCourse(course) {
    return {
        type: 'CREATE_COURSE',
        course //because right hand side matches the lhs in es6, we can write this.
    };
}