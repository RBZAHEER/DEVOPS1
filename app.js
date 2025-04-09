async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "5b7d94eb2fc959eb774f78742236fe25"; // Get it from https://openweathermap.org/api
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("City not found");

    const data = await res.json();
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <p><strong>${data.name}</strong></p>
        <p>🌡️ Temperature: ${data.main.temp}°C</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌬️ Wind: ${data.wind.speed} m/s</p>
      `;
  } catch (err) {
    document.getElementById("result").innerText = "Error: " + err.message;
  }
}
