exports.getWelcomePage =  (req, res) => {                                       //Get login page
    if (req.session.loggedIn) {                                                 // Redirect if loggedIn
        res.redirect("/home");
        return;
    }
    res.render("welcome", { title: "Welcome" });                                // Render login page
};

// /login
exports.getLoginPage = (req, res) => {                                          
    if (req.session.loggedIn) {
        res.redirect("/home");                                                   //Redirect if loggedIn to /Home
        return;
    }
    res.render("login" , { title: "Login" });                                    // Render login page
};

// /register
exports.getRegistrationPage = (req, res) => {                                     //Get registration page

    if (req.session.loggedIn) {                                                   //Redirect if loggedIn
        res.redirect("/home");
        return;
    }
    
    res.render("register" , { title: "Register" });                               //Render register page
}

// /home
exports.getHomePage = (req, res) => {                                             //Get home page
    if (!req.session.loggedIn) {                                                  // Redirect if not loggedIn
        console.log(req.session);
        res.redirect("/");
        return;
    }
    res.render('home', { title: 'Home', user: req.session.user });                  // Render home page
}
