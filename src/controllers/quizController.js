const { Quiz } = require("../models");

const quizController = {
  async renderQuizPage(req, res) {
    try {
      let id = Number(req.params.id);
      const quiz = await Quiz.findByPk(id, {
        include: [
          {
            association: "questions",
            include: ["level", "propositions", "good_answer"],
          },
          "tags",
          "author",
        ],
      });
      res.render("quiz/quiz", { quiz });
    } catch (error) {
      console.log(error);
      res.status(500).render("500");
    }
  }
};

module.exports = quizController;
