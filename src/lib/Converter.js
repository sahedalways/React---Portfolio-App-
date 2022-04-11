export function toCelsius(fahrenheit) {
  return fahrenheit - (32 * 5) / 9;
}

export function toFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

export function convert(temperature, toConvert) {
  const input = parseFloat(temperature);

  if (Number.isNaN(input)) {
    return "";
  }
  const output = toConvert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
