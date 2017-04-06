
'use strict';

var React = require('react');

var Main = React.createClass({
    render() {
        return (
            <div>
              <h1>hello world</h1>
            </div>
        );
    }
});

render(<Main />, document.getElementById('root'));