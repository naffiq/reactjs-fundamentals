var React = require('react');
var PropTypes = React.PropTypes;
var blueprintjs = require('@blueprintjs/core');
var Spinner = blueprintjs.Spinner;

function puke (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle (props) {
  return props.isLoading === true
    ? <div className="text-center">
        <Spinner />
      </div>
    : <div> CONFIRM BATTLE!: {puke(props)} </div>
};

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = ConfirmBattle;
