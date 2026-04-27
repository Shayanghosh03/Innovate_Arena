# GameHeavenZone

<img width="1917" height="963" alt="Image" src="https://github.com/user-attachments/assets/97d7cf2f-1899-499e-ad9b-48ec60476e05" />

## Live Link

https://gameheavenzone.netlify.app/

## Game Heaven

GameHeaven is a gaming showcase website built with HTML, CSS, and JavaScript. It presents popular games, provides detailed game information pages, supports login-gated Play Now links, and includes a working contact form powered by EmailJS.

## Website Highlights

- Clean multi-section landing page (Home, About, Games, Contact)
- Individual game information pages for each listed game
- Login and signup popup interface
- Play Now system that requires login before opening game links
- Contact form with validation and EmailJS integration

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- EmailJS (for contact form email sending)

## Main Features

### 1. Home and Navigation

- Top navigation with quick links to Home, About, Games, and Contact sections
- Hero welcome area with login, signup, and play buttons

### 2. About Section

- Introductory description of GameHaven
- Read More and Read Less toggle behavior

### 3. Games Section

Each game card includes:

- Game image and short description
- Info button to open the game details page
- Play Now button to open the official game link (login required)

### 4. Game Information Pages

All game pages use one shared stylesheet:

- game_pages/gamestyle.css

Each game page contains:

- Game overview
- Visual hero section
- Game video section
- About this game section
- How to play this game section

## Included Games

- PUBG Mobile
- Free Fire Max
- Candy Crush Saga
- Bright Memory: Infinite
- Shadow Fight 4: Arena
- Clash of Clans
- Asphalt 9: Legends
- Angry Birds
- Call of Duty: Mobile
- Clash Royale
- 8 Ball Pool

Game pages are available in the game_pages folder:

- game_pages/pubg.html
- game_pages/freefire.html
- game_pages/candy.html
- game_pages/infinite.html
- game_pages/shadow.html
- game_pages/coc.html
- game_pages/asphalt.html
- game_pages/angry.html
- game_pages/cod.html
- game_pages/clashRoyal.html
- game_pages/8ballpool.html

## Play Now Flow

Play Now behavior is managed in script.js:

1. User clicks Play Now on a game card.
2. If user is not logged in, login popup opens and the selected game link is saved.
3. After successful login, the saved game link opens automatically in a new tab.
4. If user is already logged in, game link opens directly.

## Login Information

Current demo login credentials:

- Username: gamehaven
- Password: 123456

Login and signup UI is available as an overlay popup from the main page.

## Contact Form

The Contact section includes:

- Full Name field (required)
- Email field (required)
- Message field (required)

Behavior:

- Client-side required field validation
- Submit button loading/success/failure states
- Email sent via EmailJS using configured service and template IDs

Related files:

- index.html
- email.js

## Project Structure

.
├── index.html
├── style.css
├── script.js
├── email.js
├── error.html
├── images/
├── gamespic/
└── game_pages/
	├── gamestyle.css
	├── pubg.html
	├── freefire.html
	├── candy.html
	├── infinite.html
	├── shadow.html
	├── coc.html
	├── asphalt.html
	├── angry.html
	├── cod.html
	├── clashRoyal.html
	└── 8ballpool.html

## Notes

- This project currently uses hardcoded demo login credentials for front-end demonstration.
- For production usage, login and form submission should be backed by secure server-side services.

