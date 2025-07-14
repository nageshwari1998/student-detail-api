# Student Detail API

A Node.js + Express backend API for managing student details, used by the Student Detail App.

## Features

- RESTful API for students
- Filter students by course
- Add, edit, delete students
- MongoDB database
- CORS enabled for Flutter/web access

## Setup

1. Install Node.js and npm: https://nodejs.org/
2. Install MongoDB and start the service
3. Clone this repository
4. Install dependencies:
   ```
   npm install
   ```
5. Start the server:
   ```
   node index.js
   ```
   or
   ```
   npm start
   ```
6. The API runs at `http://localhost:3000`

## API Endpoints

- `GET /api/students?course=EEE` - List students by course
- `POST /api/students` - Add a student
- `PUT /api/students/:id` - Edit a student
- `DELETE /api/students/:id` - Delete a student

## Folder Structure

- `controllers/` - API logic
- `models/` - Mongoose models
- `routes/` - Express routes

## Troubleshooting

- Ensure MongoDB is running
- Check your network/firewall for API access
- Use correct IP for mobile/web clients

## License

MIT
