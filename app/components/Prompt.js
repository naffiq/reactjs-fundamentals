var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

var blueprintjs = require('@blueprintjs/core');
var Button = blueprintjs.Button;

function Prompt(props) {
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
      <h1>{props.header}</h1>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser}>
          <div className="form-group">
            <input className="pt-input"
              placeholder="Github Username"
              onChange={props.onUpdateUser}
              value={props.username}
              type="text"/>
          </div>

          <div className="form-group col-sm-4 col-sm-offset-4">
            <Button text="Continue" className="" onClick={props.onSubmitUser}/>
          </div>
        </form>
      </div>
    </div>
  );
}

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
};

module.exports = Prompt;
