const userController = {

  async renderProfilePage(req, res) {
    try {

      res.render("user/profile");
    } catch (error) {
      console.log(error);
      res.status(500).render("500");
    }
  }
};

module.exports = userController;
