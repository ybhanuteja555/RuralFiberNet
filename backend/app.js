const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const profileRoutes = require('./routes/profileRoutes');
const billingRoutes = require('./routes/billingRoute');
const complaintRoute = require('./routes/complaintRoutes');
const viewUserRoute = require('./routes/viewUsers');
const addUserRoute = require('./routes/addUserRoutes');
const deleteUserRoute = require('./routes/deleteUserRoute');
const editUserRoute = require('./routes/editUserRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api/profile',profileRoutes);
app.use('/api',billingRoutes);
app.use('/api',complaintRoute);
app.use('/api',viewUserRoute);
app.use('/api',addUserRoute);
app.use('/api',editUserRoute);
app.use('/api',deleteUserRoute);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
