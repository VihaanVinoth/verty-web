const API_KEY = import.meta.env.VITE_NASA_API_KEY;

const datepicker = document.querySelector("#datepicker");

datepicker.addEventListener("change", () => {
    const date = datepicker.value;
    if (!date) return;

    document.querySelector("#app").innerHTML = "<p>loading...</p>";

    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`)
        .then(res => res.json())
        .then(data => {
            document.querySelector("#app").innerHTML = `
                <h1 class="title">${data.title}</h1>
                <img src="${data.url}" alt="${data.title}" class="cover" />
                <p class="body">${data.explanation}</p>
            `;
        })
        .catch(err => {
            document.querySelector("#app").innerHTML = `<p>Error loading APOD data.</p>`;
            console.error(err);
        });
});