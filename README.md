# CALORUN – Learn. Play. Balance.

## Group Number
Group 33

## Group Members
- Jhesza Mhei Daquis
- Kylo Bryan Lacida
- Samantha Kyla Manzanero

## Project Description
CALORUN is a simple browser-based educational prototype created to demonstrate database connectivity for the Systems Fundamentals database connectivity activity. The prototype allows a player to enter their name, score, and level, save this progress, and retrieve and display it back on the screen.

## Tools and Technologies Used
- HTML
- CSS
- JavaScript

## Database or Storage Used
Browser **localStorage** — data is stored directly in the browser using key-value pairs and does not require an external server or database service.

## How to Run the Prototype
1. Download or clone this repository.
2. Open the project folder.
3. Open `index.html` in any modern web browser (Google Chrome recommended).
4. Enter a player name, score, and level.
5. Click **Save Progress** to store the data.
6. Click **Load Progress** to retrieve and display the saved data.

## What Data Is Saved and Retrieved
The following player data is saved and retrieved:
- Player Name
- Score
- Level

This data is stored as a JSON object under the key `calorunPlayer` in the browser's localStorage, and is displayed back in the "Saved Progress" section of the interface when loaded.

## Known Limitations
- Data is stored only in the browser used, and will not sync across different browsers or devices.
- Clearing browser data/cache will erase the saved progress.

## References
- MDN Web Docs – Window.localStorage
