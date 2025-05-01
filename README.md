#🌐 **Rural FIber Net (RFN) Management Platform**


A full-stack web application built to manage and streamline customer profiles, billing history, and complaints for an Internet Service Provider. Designed for efficiency, clarity, and real-world scalability.

🚀 Features
🔐 Secure Login & Authentication

👤 Dynamic User Profile View

🧾 Subscription & Billing History (Card Layout)

📬 Complaint Tracking & Request Raising

🧠 Role-based Access Control (Admin, Users, Staff)

📡 API-driven architecture with PostgreSQL backend

📂 Modular structure with Model-Controller-Routes pattern

💬 Axios-based frontend-backend communication

🛠️ Tech Stack
Frontend
React.js (JSX Components)

Axios for API requests

CSS Modules & Bootstrap

React Icons (FaIcons)

Backend
Node.js with Express.js

PostgreSQL (Relational Database)

RESTful API (MVC Architecture)

CORS & Body-parser for middleware

🗂️ Project Structure
pgsql
Copy
Edit
rural-fiber-net/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
├── frontend/
│   ├── components/
│   │   ├── ProfileDetails.jsx
│   │   ├── BillingHistory.jsx
│   │   └── Complaints.jsx
│   ├── App.js
│   └── index.js
├── README.md

🧪 Getting Started
Prerequisites
Node.js and npm

PostgreSQL Database

Git

Installation
bash
Copy
Edit
# Clone the repository
git clone git@github.com:ybhanuteja555/RuralFiberNet.git

# Navigate to backend & install dependencies
cd backend
npm install

# Navigate to frontend & install dependencies
cd ../frontend
npm install
Configuration
Set up your PostgreSQL database and update the credentials in backend/models/db.js.

Ensure your tables and seed data are present (user, subscriptions, complaints, etc.).

Running the App
bash
Copy
Edit
# Start the backend
cd backend
node server.js

# Start the frontend
cd ../frontend
npm start
📡 API Endpoints

Method	Endpoint	Description
POST	/api/login	User authentication
GET	/api/profile?mail=...	Fetch profile based on email
GET	/api/subscription	Get user's billing history
POST	/api/complaint	Raise a new complaint
✨ Highlights
Modular MVC codebase

Clean UI with card-based layouts

Error handling and loading indicators

Designed for scalability and extensibility

🤝 Contribution
If you'd like to improve the platform (UI, performance, features), feel free to fork, create a PR, or open an issue. Contributions are welcome!

👨‍💻 Author
Bhanu Teja Yenala
React & Node.js Developer

📄 License
This project is licensed under the MIT License.
