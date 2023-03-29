// Exports the createUser function
exports.createUser = async (req, res) => {
	try {
		// Create a new user using the User model and request data
		const dbUserData = await User.create({
			fname: req.body.fname, // First name
			lname: req.body.lname, // Last name
			username: req.body.username, // Username
			email: req.body.email, // Email
			password: req.body.password, // Password
		});

		// Save session data
		req.session.save(() => {
			req.session.loggedIn = true; // Set loggedIn to true
			res.status(200).json(dbUserData); // Send a 200 response with user data
		});
	} catch (err) {
		console.log(err); // Log error
		res.status(500).json(err.errors[0].message); // Send a 500 response with error message
	}
};

