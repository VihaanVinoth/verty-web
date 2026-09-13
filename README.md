# verty-web - A simple and sleek tab dashboard.

Verty-web is a minimalistic tab homepage to be set as your `New Tab` page, which is designed to replace your default browser tab with a dashboard powered with NASA's APOD (Astronomy Picture of the Day) API that randomly delivers you a space-related wallpaper every time you refresh your page. It's built using **Vite** and **vanilla JavaScript**.

## Features of verty-web
- **Timely Affirmations:** Displays a large **24-hour** digital clock alongside a friendly greeting that shift based on TOD. 
- **Google Search Bar:** Features a clean and similar search bar alike Google's that sends you to Google whenever you search for a query 
- **Quick Links Bar:** The dashboard includes a links bar to link to your most frequently used sites (this project sets the links with Github, YouTube, Discord, and ChatGPT). 
- **Random Astronomy Wallpaper:** Powered by NASA's APOD API, on refresh you can view a HD-quality wallpaper randomly picked from NASA's Astronomy archive, spanning from the first Astronomy Picture of the Day on June 16th 1995, to today. 

## How to setup the tab

Here are the steps to setup the tab to your Chrome. NOTE: Don't be afraid to tinker with the code to your heart's content, as long as you are familiar with it.

1. Build the Extension: Run `npm run build` in your project root to bundle the app into the dist/ folder.
2. Load into Chrome:
3. Open Google Chrome and navigate to `chrome://extensions/`.
4. Enable Developer mode via the toggle in the top-right corner.
5. Click Load unpacked in the top-left corner and select your generated dist/ directory.
6. Open a New Tab: Press `Ctrl + T` (Windows/Linux) or `Cmd + T` (Mac) to launch your new dashboard.