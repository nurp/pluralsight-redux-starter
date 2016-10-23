import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MyPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            title: "MyPage"
        };

        this.onTitleChange = this.onTitleChange.bind(this);
    };
    render() {
        return (
            <div>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.title} />
            </div>
        );
    }
}

MyPage.propTypes = {
    courses: PropTypes.array.isRequired,
};

function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(MyPage);