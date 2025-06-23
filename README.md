# Personal Blog Manager

This is a blog management application built for Code Challenge 3. The application provides basic CRUD functionality for managing blog posts.

## Features

The application includes the following functionality:
- Display all blog posts in a list format
- View detailed information for individual posts
- Create new blog posts
- Edit existing posts
- Delete posts

The interface is designed to be clean and user-friendly.

## Installation and Setup

### Prerequisites
- Node.js (required for json-server)
- Web browser
- Terminal/Command prompt

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd code-challenge3
   ```

2. **Install json-server globally**
   ```bash
   npm install -g json-server
   ```
   
   Note: You may need to use `sudo` on macOS/Linux if you encounter permission errors.

3. **Start the development server**
   ```bash
   json-server --watch db.json --port 3000
   ```
   
   This creates a REST API server at `http://localhost:3000` using the provided JSON data.

4. **Launch the application**
   
   Open `index.html` in your preferred web browser. The application will automatically connect to the JSON server.
   
   Sample blog posts are included for testing purposes.

## Project Structure

```
code-challenge3/
├── index.html          # Main application interface
├── index.js           # Core JavaScript functionality
├── styles.css         # Styling and layout
├── db.json           # Mock database with sample data
└── README.md         # Documentation
```

## Technical Implementation

The application is built using vanilla JavaScript to maintain simplicity and avoid unnecessary dependencies. The architecture follows a straightforward client-server pattern:

1. Application initialization fetches all posts from the json-server endpoint
2. Posts are rendered in a list interface on the left panel
3. Post selection triggers detailed view rendering on the right panel
4. Form submissions handle CRUD operations via REST API calls
5. Real-time updates refresh the interface after each operation

The codebase prioritizes readability and maintainability. Comprehensive comments are included throughout the implementation.

## Known Limitations

- The application requires json-server to be running on port 3000
- Network error handling is minimal and may result in unexpected behavior
- Form validation could be more robust
- Rapid user interactions may cause UI inconsistencies

## Future Enhancements

- Search and filtering capabilities
- Post categorization system
- Improved error handling and user feedback
- Enhanced UI/UX with animations
- Database integration (replacing json-server)
- Multi-user authentication system
- Media upload functionality

## Development Notes

- Comments are included for clarity and maintenance

## Known Issues

- Post selection highlighting may persist incorrectly under rapid interactions
- Input validation is basic and may allow invalid submissions
- Error messaging could provide more specific feedback
- CSS organization could be improved for better maintainability

## Support

For questions or issues regarding this implementation, please refer to the inline documentation or reach out for clarification.

