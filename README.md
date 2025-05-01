<<<<<<< HEAD
# 🌐 Rural FIber Net Platform

A full-stack web application to manage customer operations — including profile management, billing history, and complaint resolution.

## 🚀 Overview

This application allows users to:
- View their profile details.
- See billing history and payment status.
- Raise and manage complaints.

Built using a MERN-like stack (React + Node.js) with **PostgreSQL** as the backend database.

---

## 🧠 Key Features

- 🔍 View dynamic customer profile
- 💳 Display of billing history as cards
- 📡 Raise complaints with tracking
- ✅ PostgreSQL database integration
- 🔐 Role-based API access
- ⚡ Fast, responsive design

---

## 🛠️ Tech Stack

**Frontend**
- React.js
- Axios
- Bootstrap / CSS Modules
- React Icons

**Backend**
- Node.js
- Express.js
- PostgreSQL
- `pg` node module

**Other Tools**
- Visual Studio Code
- Postman
- Git & GitHub

---

## 📁 Folder Structure

```
rural-fiber-net-platform/
├── backend/
│   ├── controllers/
│   │   └── profileController.js
│   ├── models/
│   │   ├── db.js
│   │   └── profileModel.js
│   ├── routes/
│   │   └── profileRoutes.js
│   └── server.js
=======
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
>>>>>>> 39ef7f0e9ea917d60cbb00ca3f957c782f761a8f
├── frontend/
│   ├── components/
│   │   ├── ProfileDetails.jsx
│   │   ├── BillingHistory.jsx
│   │   └── Complaints.jsx
│   ├── App.js
<<<<<<< HEAD
│   ├── index.js
│   └── styles/
│       ├── ProfileDetails.css
│       ├── BillingHistory.css
│       └── Complaints.css
├── .gitignore
├── package.json
└── README.md
```

---

## 📦 API Endpoints

| Method | Endpoint               | Description                |
|--------|------------------------|----------------------------|
| GET    | `/api/profile?mail=`   | Fetch user profile by mail |
| GET    | `/api/subscription`    | Get billing history         |
| POST   | `/api/complaint`       | Raise a new complaint       |

---

## 💡 How It Works

### Frontend
- Components like `ProfileDetails.jsx` and `BillingHistory.jsx` fetch data using Axios.
- Data is rendered dynamically and styled using CSS modules.
- Components handle loading and error states.

### Backend
- Express routes forward requests to controllers.
- Controllers invoke models which query the PostgreSQL DB.
- Responses are sent as JSON to the frontend.

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/ybhanuteja555/RuralFiberNet.git
cd rural-fiber-net-platform
```

### 2. Backend Setup
```bash
cd backend
npm install
node server.js
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm start
```

### 4. Environment Setup (Optional)
Create a `.env` file in the backend folder:
```
DATABASE_URL=postgresql://your_user:your_password@localhost:5432/your_db_name
```

---

## 🧪 Sample PostgreSQL Schema

```sql
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(100),
  phone_number VARCHAR(15),
  address TEXT,
  status VARCHAR(10)
);

CREATE TABLE billing_history (
  invoice_no SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id),
  payment_date DATE,
  amount NUMERIC,
  payment_mode VARCHAR(20),
  payment_status VARCHAR(10)
);
```

---

## 📸 UI Screenshots

> (Add images or live demo links here if available)

---

## 🤝 Contact

**Bhanu Teja Yenala**  
📧 ybhanuteja555@gmail.com
🔗 [LinkedIn](https://www.linkedin.com/in/bhanu-teja-yenala-215330240)  
🔗 [GitHub](https://github.com/ybhanuteja555)

---

## 🌟 Star This Repo

If you found this project helpful, consider giving it a ⭐ on GitHub!
=======
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
>>>>>>> 39ef7f0e9ea917d60cbb00ca3f957c782f761a8f
