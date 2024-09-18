const { Quiz } = require("../models");


const mainController = {
  async renderHomePage(req, res) {
    try {
      const quizzes = await Quiz.findAll({ order: [['title', 'ASC']], include: ["author", "tags"] });
      res.render("main/home", { quizzes });
    } catch (error) {
      console.log(error);
      res.status(500).render("500");
    }
  }
};

module.exports = mainController;
