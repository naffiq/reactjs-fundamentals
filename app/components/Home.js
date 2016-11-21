var blueprintjs = require('@blueprintjs/core');
var Button = blueprintjs.Button;

var React = require('react');
var transparentBg = require('../styles').transparentBg
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function() {
    return (
      <div className='jumbotron col-sm-12 text-center' style={transparentBg}>
        <h1>Github Battle</h1>

        <p className="lead">Some fancy motto</p>
        <Link to='/playerOne'>
          <Button
            rightIconName="arrow-right"
            className="pt-intent-success"
            text="Start"
          />
        </Link>
      </div>
    )
  }
});

module.exports = Home;
