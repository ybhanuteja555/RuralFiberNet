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
├── frontend/
│   ├── components/
│   │   ├── ProfileDetails.jsx
│   │   ├── BillingHistory.jsx
│   │   └── Complaints.jsx
│   ├── App.js
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
