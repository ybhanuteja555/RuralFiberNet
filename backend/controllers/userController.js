const user = require('../models/userModel')

const getUserProfile = async (req, res) => {
 
    const {email,password} = req.body;
    console.log("\n[INFO] Received login request");
    console.log("Email:", email);
    console.log("Password:", password);
  

    if(!email || !password)
    {
      return res.status(400).json({success:false, messsage:"email and password are required"});
    }
    try {
      const User = user.getUser(email);
      console.log(User);
    if(!User && password !== User.password)
    {
      return res.status(401).json({success:false,message:"invalid credentials"});
    }
    console.log("[SUCCESS] User found. Login successful.");
      return res.status(200).json({
        
        success:true,
        message:"User login successful",
        user:{
              user_id : User.user_id,
              user_name:User.first_name + User.last_name,
              phone_number : User.phone_number,
              package_name: User.package_name,
              speed : User.speed
        }
      });
    }
     catch (error) {
      console.error("[ERROR] Login processing failed:", error);
    res.status(500).json({ error: 'Error fetching user profile' });
};
}

module.exports ={getUserProfile};
