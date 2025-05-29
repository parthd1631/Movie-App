# Movie-App
 
A modern web application that allows users to browse, search, and manage their favorite movies using the TMDB (The Movie Database) API.

## Features

- 🎬 Browse popular movies
- 🔍 Search for movies by title
- ❤️ Add/remove movies to favorites
- 📱 Responsive design for all devices
- �� Persistent storage of favorites using localStorage

## Tech Stack

- React.js
- React Router for navigation
- Context API for state management
- TMDB API for movie data
- CSS for styling

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd movie-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your TMDB API key:

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Project Structure
movie-app/
├── frontend/
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── contexts/ # Context providers
│ │ ├── pages/ # Page components
│ │ ├── services/ # API services
│ │ └── css/ # Stylesheets
│ └── public/ # Static assets
└── README.md


## Usage

1. **Home Page**
   - View popular movies
   - Search for movies using the search bar
   - Click the heart icon to add/remove movies from favorites

2. **Favorites Page**
   - View all your favorite movies
   - Remove movies from favorites
   - Access this page through the navigation bar

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the movie data API
- React.js community for the amazing framework
