const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const client = require('./models/db.js');
const userRoutes = require('./routes/userRoutes.js');
const profileRoutes = require('./routes/profileRoutes.js');
const billingRoute = require('./routes/billingRoute.js');
const complaintRoute = require('./routes/complaintRoutes.js');
const viewUserRoute = require('./routes/viewUsers.js');
const addUserRoute = require('./routes/addUserRoutes.js');
const deleteUserRoute = require('./routes/deleteUserRoute.js');
const editUserRoute = require('./routes/editUserRoutes.js');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

console.log("Middleware setup complete.");

// PostgreSQL connection setup
console.log("Attempting to connect to PostgreSQL...");
// client.connect()
//   .then(() => console.log("✅ Connected to PostgreSQL"))
//   .catch(err => {
//     console.error("❌ PostgreSQL connection error:", err.stack);
//     process.exit(1); // Exit if DB connection fails
//   });

// // Route to validate user login
// app.post('/api/login', async (req, res) => {
//   console.log("📥 Received login request.");
//   const { email, password } = req.body;
//   console.log("🧾 Request Body:", { email, password });

//   if (!email || !password) {
//     console.warn("⚠️ Missing email or password in request.");
//     return res.status(400).json({ success: false, message: "Email and password are required" });
//   }

//   try {
//     const query = 'SELECT * FROM users WHERE email = $1 AND password = $2';
//     const values = [email, password];
    
//     console.log("📤 Executing query:", query);
//     console.log("📦 With values:", values);

//     const result = await client.query(query, values);

//     console.log("📊 Query result:", result.rows);

//     if (result.rows.length > 0) {
//       console.log(`✅ Login successful for user: ${email}`);
//       res.status(200).json({ success: true, message: "Login successful", user: result.rows[0] });
//     } else {
//       console.warn(`❌ Invalid login attempt for user: ${email}`);
//       res.status(401).json({ success: false, message: "Invalid email or password" });
//     }

//   } catch (error) {
//     console.error("🔥 Login processing error:", error);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// });
app.use('/api',userRoutes);
app.use('/api',profileRoutes);
app.use('/api',billingRoute);
app.use('/api',complaintRoute);
app.use('/api',viewUserRoute);
app.use('/api',addUserRoute);
app.use('/api',editUserRoute);
app.use('/api',deleteUserRoute);

client.connect()
.then(() => console.log("connected to postgres sql"))
.catch(err =>{console.error("DB connection is failed"+err.stack)});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
