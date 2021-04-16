import React from 'react';
import TemperatureInput from './TemperatureInput';
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { template: '' };
  }

  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }

  render() {
    const temperature = this.state.temperature;
    return (
      // <fieldset>
      //   <legend>Enter temperature in Celsius:</legend>
      //   <input value={temperature} onChange={this.handleChange} />
      //   <BoilingVerdict celsius={parseFloat(temperature)} />
      // </fieldset>
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

export default Calculator;
