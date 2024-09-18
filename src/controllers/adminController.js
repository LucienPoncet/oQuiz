const adminController = {
  async renderAdminPage(req, res) {
    try {
      res.render("admin/admin");
    } catch (error) {
      console.log(error);
      res.status(500).render("500");
    }
  }
};

module.exports = adminController;
