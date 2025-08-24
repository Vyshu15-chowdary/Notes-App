📝 Notes App (MERN Stack)

A full-stack Notes Management Application built with the full stack.
Users can create, read, update, and delete notes easily.

🚀 Features

📝 Add new notes

📖 View all notes

✏️ Edit/update notes

🗑️ Delete notes

✅ Mark notes as completed

⏳ Timestamps for created/updated notes

 # 🛠 Tech Stack

Frontend: Html, JavaScript, CSS

Backend: Node.js, Express.js

Database: MongoDB with Mongoose

API Testing: Thunder Client / Postman

📂 Folder Structure
Notes-App/
 ┣ 📂 backend/
 ┃ ┣ 📄 server.js
 ┃ ┣ 📄 notesModel.js
 ┃ ┣ 📄 package.json
 ┃ ┗ 📄 .env
 ┣ 📂 frontend/
 ┃ ┣ 📄 index.html
 ┃ ┣ 📄 app.js
 ┃ ┣ 📄 style.css
 ┃ ┗ 📄 package.json
 ┗ 📄 README.md

 ⚡ Getting Started
1. Clone the repository
git clone https://github.com/your-username/notes-app.git
cd notes-app

2. Backend Setup
cd backend
npm install

# Create a .env file inside backend:

MONGO_URI=mongodb://127.0.0.1:27017/notesApp
PORT=5000

# Run backend:

npx nodemon server.js

3. Frontend Setup
cd frontend
npm install
npm start

🌐 API Endpoints
Method	Endpoint	Description
GET	/api/notes	Get all notes
POST	/api/notes	Add a new note
PUT	/api/notes/:id	Update a note by ID
DELETE	/api/notes/:id	Delete a note by ID
