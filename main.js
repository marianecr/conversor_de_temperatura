function calcularFahrenheit() {
  var temperatureCelsius = parseFloat(
    document.getElementById("temperature").value
  );

  var temperatureFahrenheit = (temperatureCelsius * (9 / 5) + 32).toFixed(1);

  alert(
    "A temperatura " +
      temperatureCelsius +
      "°c corresponde a " +
      temperatureFahrenheit +
      "° em Fahrenheit."
  );
}

function calcularCelsius() {
  var temperatureFahrenheit = parseFloat(
    document.getElementById("temperature").value
  );

  var temperatureCelsius = (((temperatureFahrenheit - 32) * 5) / 9).toFixed(1);

  alert(
    "A temperatura " +
      temperatureFahrenheit +
      "°F corresponde a " +
      temperatureCelsius +
      "° graus Celsius."
  );
}
