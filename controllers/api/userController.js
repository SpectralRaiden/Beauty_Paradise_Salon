const { User } = require('../../models');										//Import User model


// Create a new user
exports.createUser = async (req, res) => {										// Create user function
	try {
		const dbUserData = await User.create({									// Create user object
			fname: req.body.fname,
			lname: req.body.lname,
			username: req.body.username,
			email: req.body.email,
			password: req.body.password,
		});

		req.session.save(() => {											   // Save session data: loggedIn true
			req.session.loggedIn = true;
			res.status(200).json(dbUserData);									// Send user data
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err.errors[0].message);
	}
};

// Login a user
exports.loginUser = async (req, res) => {										// Login user function
	try {
		const dbUserData = await User.findOne({									// Find user data
			where: {
				username: req.body.username,
			},
		});

		if (!dbUserData) {														// if user doesnt exists
			res
				.status(400)
				.json({ message: "Incorrect username or password. Please try again!" });
			return;
		}

		console.log(req.body.password + dbUserData.password);
		const validPassword = await dbUserData.checkPassword(req.body.password);
		if (!validPassword) {
			res
				.status(400)
				.json({ message: "Incorrect username or password. Please try again!" });
			return;
		}

		req.session.save(() => {
			req.session.loggedIn = true;
			req.session.user = dbUserData;
			res
				.status(200)
				.json({ user: dbUserData, message: "You are now logged in!" });
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
};

// Logout a user
exports.logOutUser = (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {									// Destroy session
			console.log("Logged out");
			res.redirect("/");
        });
    } else {
		res.status(404).end();
		return;
    }
};



