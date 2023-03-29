exports.getWelcomePage =  (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/home");
        return;
    }
    res.render("welcome", { title: "Welcome" });
};

// /login
exports.getLoginPage = (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/home");
        return;
    }
    res.render("login" , { title: "Login" });
};

// /register
exports.getRegistrationPage = (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.loggedIn) {
        res.redirect("/home");
        return;
    }
    // Otherwise, render the 'register' template
    res.render("register" , { title: "Register" });
}

// /home
exports.getHomePage = (req, res) => {
    if (!req.session.loggedIn) {
        console.log(req.session);
        res.redirect("/");
        return;
    }
    res.render('home', { title: 'Home', user: "req.session.user" });
}
