async function fetchNextMCUMovie() {
    console.log("fetchNextMCUMovie() called"); // <-- Add this

    try {
        const response = await fetch('https://www.whenisthenextmcufilm.com/api');

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();

        document.getElementById("movie-title").textContent = data.title;
        document.getElementById("release-date").textContent = `Release Date: ${data.release_date}`;
        document.getElementById("days-left").textContent = `Days Left: ${data.days_until}`;
        document.getElementById("poster").src = data.poster_url;
    }
    catch (error) {
        console.error('Error fetching next MCU movie', error);
    }
}

document.addEventListener("DOMContentLoaded", fetchNextMCUMovie);