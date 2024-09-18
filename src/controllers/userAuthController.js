const { User } = require("../models");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userAuthController = {
  async renderLoginPage(req, res) {
    try {
      if (res.locals.loggedInUser){
        return res.redirect('/');
      }
      res.render("userAuth/login");
    } catch (error) {
      console.log(error);
      res.status(500).render("500");
    }
  },

  async doLogin(req, res){
    try{

      let success = false;

      const { email, password } = req.body;

      const foundUser = await User.findOne({ where : { email: email}});

      if (foundUser){
        const hash = foundUser.password;

        success = await bcrypt.compare(password, hash);
      }

      if (!success){
        return res.render("userAuth/login", { error: true });
      }

      req.session.userId = foundUser.id;

      res.redirect('/');

    }catch(error){
      res.status(500).render('500');
    }
  },

  async doLogout(req, res) {
    if (req.session.userId){
      req.session.userId = null;
    }
    res.redirect('/');
  },

  async renderSignupPage(req, res) {
    try {

      res.render("userAuth/signup");
    } catch (error) {
      console.log(error);
      res.status(500).render("500");
    }
  },

  async doSignup(req, res) {
    try {

      const { firstname, lastname, email, password } = req.body;

      const hash = await bcrypt.hash(password, saltRounds);

      const newUser = User.build({
        firstname,
        lastname,
        email,
        password: hash
      });

      await newUser.save();

      res.redirect('/');

    } catch (error) {
      console.log(error);
      res.status(500).render("500");
    }
  }
};

module.exports = userAuthController;

