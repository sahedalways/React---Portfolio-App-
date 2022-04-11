import React from "react";

const ScaleName = {
  c: "censius",
  f: "fahrenheit",
};

export const TempretureInput = (props) => {
  const { temperature, onTemperatureChange, scale } = props;
  return (
    <fieldset>
      <legend>Enter tempreture in {ScaleName[scale]} ::</legend>

      <input
        type="text"
        value={temperature}
        onChange={(event) => onTemperatureChange(event, scale)}
      />
    </fieldset>
  );
};

export default TempretureInput;
