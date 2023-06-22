
    function convertTemperatures() {
      // Get input values
      var celsius = parseFloat(document.getElementById("celsiusInput").value);
      var fahrenheit = parseFloat(document.getElementById("fahrenheitInput").value);
      var kelvin = parseFloat(document.getElementById("kelvinInput").value);

      // Convert Celsius to Fahrenheit and Kelvin
      if (!isNaN(celsius)) {
        fahrenheit = celsius * 9 / 5 + 32;
        kelvin = celsius + 273.15;
      }

      // Convert Fahrenheit to Celsius and Kelvin
      if (!isNaN(fahrenheit)) {
        celsius = (fahrenheit - 32) * 5 / 9;
        kelvin = (fahrenheit + 459.67) * 5 / 9;
      }

      // Convert Kelvin to Celsius and Fahrenheit
      if (!isNaN(kelvin)) {
        celsius = kelvin - 273.15;
        fahrenheit = kelvin * 9 / 5 - 459.67;
      }

      // Update input fields
      document.getElementById("celsiusInput").value = isNaN(celsius) ? "" : celsius.toFixed(2);
      document.getElementById("fahrenheitInput").value = isNaN(fahrenheit) ? "" : fahrenheit.toFixed(2);
      document.getElementById("kelvinInput").value = isNaN(kelvin) ? "" : kelvin.toFixed(2);
    }

    function clearFields() {
      document.getElementById("celsiusInput").value = "";
      document.getElementById("fahrenheitInput").value = "";
      document.getElementById("kelvinInput").value = "";
    }
 