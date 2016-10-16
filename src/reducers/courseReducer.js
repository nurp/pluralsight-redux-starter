//take state and action, return a new state

export default function courseReducer(state = [], action) {//empty array means, I start with empty courses
    switch (action.type) {
        case 'CREATE_COURSE':
            return [...state,  //spread the state array here
            Object.assign({}, action.course)]; //create deep copy of action.course
        //returning a new array with the new course passed in.
        default:
            return state;
    }
}