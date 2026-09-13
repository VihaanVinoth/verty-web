const API_KEY = import.meta.env.VITE_NASA_API_KEY;

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');

    document.getElementById('clock').textContent = `${hours}:${minutes}`;

    const greetingEl = document.getElementById('greeting');
    if (hours < 12) {
        greetingEl.textContent = "Good morning.";
    } else if (hours < 18) {
        greetingEl.textContent = "Good afternoon.";
    } else {
        greetingEl.textContent = "Good evening.";
    }
}

updateClock();
setInterval(updateClock, 1000);

function fetchBG() {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const dateStr = yesterday.toISOString().split('T')[0];

    const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${dateStr}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.media_type === 'image') {
                document.body.style.backgroundImage = `url('${data.url}')`;
            }
        })
        .catch(err => console.error("Error fetching NASA API", err));
}

fetchBG();