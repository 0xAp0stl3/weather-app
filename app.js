const form = document.getElementById('weather-form');
const result = document.getElementById('weather-result');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = document.getElementById('city').value.trim();
  if (!city) return;

  result.innerHTML = `<div class="loader"></div>Chargement...`;
  try {
    const apiKey = "b669b04cca74888d6b38ae2fc57f72d1"; // Mets ta clé ici !
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=fr`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Ville non trouvée");
    const data = await response.json();

    result.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <div><b>${Math.round(data.main.temp)}°C</b> (${data.weather[0].description})</div>
      <div>💧 Humidité : ${data.main.humidity}%</div>
      <div>💨 Vent : ${data.wind.speed} m/s</div>
    `;
  } catch (err) {
    result.textContent = err.message;
  }
});