import React, { Component } from "react";
import { convert, toCelsius, toFahrenheit } from "../lib/Converter";
import BoilingVerdict from "./BoilingVerdict";
import TempretureInput from "./TempretureInput";

class Calculator extends Component {
  state = {
    temperature: "",
    scale: "",
  };

  onHandleChange = (event, scale) => {
    this.setState({
      temperature: event.target.value,
      scale,
    });
  };
  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === "f" ? convert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? convert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TempretureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.onHandleChange}
        />
        <TempretureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.onHandleChange}
        />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </div>
    );
  }
}

export default Calculator;
