/*
 1. Simple create course form
 2. define course actions.
 3. create course reducer.
 4. create root reducer if not exist.
 5. setup redux store
 6. connect container components. wire up the container component which will connect to our redux store using redux connect. 
*/

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import { bindActionCreators } from 'redux';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: { title: "" }
            //
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({ course: course });
        //if you dont bind _this_, you get this error: cannot read property 'state' of undefined. do it in constructor.      
    }

    onClickSave() {
        //alert(`Saving ${this.state.course.title}`);
        this.props.actions.createCourse(this.state.course);
    }
    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }
    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add course</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.title} />
                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}

// what actions we want to expose to our component
// 3 ways to handle mapDispatchToProps
// 1. ignore it. then you can manually dispatch action in your component. (this.props.dispatch(loadCourses()))
// 2. create a wrapper to dispatch action. function mapDispatchToProps(dispatch) { return { loadCourses: () => {dispatch(loadCourses())}}}. then in your component call this.props.loadCourses(); this method is recommended.
// 3. use bindActionCreators which binds your action creators in dispatch calls for you. return { actions: bindActionCreators(actions, dispatch)}. then in the component call this.props.actions.loadCourses();
function mapDispatchToProps(dispatch) {
    return {
        // bindActionCreators will go to courseActions and find all the actions in that file, wrap them and call dispatch.
        actions: bindActionCreators(courseActions, dispatch)
    };
}


CoursesPage.propTypes = {
    //dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

// what part of the Redux store(state) you want to expose to your component as props
// component will subscribe to that prop updates. 
// if doing expensive operations, consider adding Reselect library. It ensures the expensive operations are done when really required.
function mapStateToProps(state, ownProps) {
    //ownProps: let's us access to component's props. it is a reference to component props.
    return {
        courses: state.courses //from rootreducer
    };
}

//export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
// if I omit mapDispatchToProps, connect will attach "dispatch" to the component automatically. 
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);