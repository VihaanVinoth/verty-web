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

function fetchRandomDate(start, end) {
    const randTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
    return new Date(randTime).toISOString().split('T')[0];
}

function fetchBG() {
    const startDate = new Date('1995-06-16');
    const endDate = new Date();
    endDate.setDate(endDate.getDate() - 1);

    const randDate = fetchRandomDate(startDate, endDate);

    const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${randDate}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.media_type === 'image') {
                document.body.style.backgroundImage = `url('${data.url}')`;
            } else {
                fetchBG();
            }
        })
        .catch(err => console.error("Error fetching NASA API", err));
}

fetchBG();