// Step 1: Import the profile model
// This model contains the database logic to fetch user profile details
const profileModel = require('../models/profileModel');

// Step 2: Define an asynchronous function to handle the profile details request
// This function will be called when the /profile route is hit via POST or GET
const profileDetails = async (req, res) => {
  try {
    // Step 3: Extract the email from the query parameters in the request URL
    // For example: /profile?mail=user@example.com
    const email = req.query.mail;
    console.log(email);
    // Step 4: Call the model function to fetch user profile details from the database
    // It returns user information related to the provided email
    const user = await profileModel.getProfileDetails(email);

    // Step 5: Send a successful HTTP response (200 OK) back to the client
    // The response contains the user profile data in JSON format
    return res.status(200).json(user);

  } catch (error) {
    // Step 6: Handle any unexpected errors during the process
    // Send a 500 Internal Server Error response if something goes wrong
    console.error('Error fetching profile details:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Step 7: Export the controller function
// This allows it to be used in route files
module.exports = {
  profileDetails
};
