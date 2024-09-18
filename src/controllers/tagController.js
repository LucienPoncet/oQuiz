const { Tag } = require("../models");

const tagController = {

  async renderTagsPage(req, res) {
    try {
      const tags = await Tag.findAll({ order: [['name', 'ASC']], include: ["quizzes"] });
      for (const tag of tags) {
        tag.quizzes.sort((a, b) => {
          if(a.title < b.title){
            return -1;
          }else {
            return 1;
          }
        });
      }
      res.render("tag/tags", { tags });
    } catch (error) {
      console.log(error);
      res.status(500).render("500");
    }
  }
};

module.exports = tagController;
