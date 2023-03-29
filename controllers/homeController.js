exports.getWelcomePage =  (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/home");
        return;
    }
    res.render("welcome", { title: "Welcome" });
};

