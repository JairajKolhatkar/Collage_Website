# College Website - Fullstack Project

A premium, responsive, and scalable college website built with modern technologies. This project provides a comprehensive digital platform for educational institutions with features for students, faculty, and administrators.

## Live Demo

[Coming Soon](#)

![College Website Screenshot](placeholder-for-screenshot.png)

## Tech Stack

### Frontend
- React with TypeScript (.tsx)
- Tailwind CSS for styling and responsive design
- React Router for client-side navigation
- React Icons for UI elements
- Vite for fast development and optimized builds

### Backend
- Node.js with Express
- PostgreSQL database
- JWT-based authentication
- RESTful API architecture

## Project Structure

This is a monorepo with separate client (frontend) and server (backend) folders:

```
college-website/
├── client/                     # Frontend React application
│   ├── public/                 # Static assets
│   └── src/
│       ├── components/         # Reusable components
│       │   ├── Academics/      # Academic-related components
│       │   ├── Admissions/     # Admission-related components
│       │   ├── Contact/        # Contact-related components
│       │   ├── Events/         # Event and blog components
│       │   ├── Faculty/        # Faculty profiles and directory
│       │   ├── Global/         # Globally used components
│       │   ├── home/           # Homepage components
│       │   ├── layout/         # Layout components (header, footer, etc.)
│       │   ├── Library/        # Library-related components
│       │   ├── Payments/       # Payment-related components
│       │   ├── Placements/     # Placement-related components
│       │   └── Student/        # Student-related components
│       ├── pages/              # Page components
│       ├── App.tsx             # Main application component
│       └── main.tsx            # Application entry point
└── server/                     # Backend Node.js application
    ├── src/                    # Source code
    ├── config/                 # Configuration files
    ├── controllers/            # Request handlers
    ├── models/                 # Database models
    ├── routes/                 # API routes
    ├── middlewares/            # Custom middlewares
    └── utils/                  # Utility functions
```

## Features

### For Students
- Course registration and management
- Library resources and book reservations
- Event calendar and announcements
- Fee payment portal
- Academic resources and downloads
- Student profile management

### For Faculty
- Course management
- Student attendance tracking
- Grade submission
- Resource sharing
- Faculty profile management

### For Administration
- Student and faculty management
- Course scheduling and management
- Event and news publishing
- Content management system
- Reports and analytics

### Technical Features
- Responsive design optimized for all devices
- JWT-based authentication with role-based access control
- Dynamic content management
- Interactive UI components with animations
- Optimized database queries
- Secure API endpoints

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- PostgreSQL

### Installation

1. Clone the repository
```bash
git clone https://github.com/JairajKolhatkar/Collage_Website.git
cd Collage_Website
```

2. Install dependencies
```bash
# Install root dependencies
npm install

# Install client dependencies
cd client && npm install

# Install server dependencies
cd ../server && npm install
```

3. Set up environment variables
```bash
# Create .env file in the server directory
cp server/.env.example server/.env
# Edit the .env file with your database credentials
```

4. Run the development server
```bash
# Run both client and server (from root directory)
npm run dev

# Run only client
npm run client

# Run only server
npm run server
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Express](https://expressjs.com/)
- [Vite](https://vitejs.dev/) 