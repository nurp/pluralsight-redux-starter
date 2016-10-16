import React from 'react';

/* because of a hot-reloading limitation, we don't use stateless component, otherwise it's fine */

class AboutPage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>About</h1>
            </div>
        );
    }
}

export default AboutPage;