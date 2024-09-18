const { Level } = require("../models");


const levelController = {
  async indexPage(req, res){
    try{
      const levels = await Level.findAll();
      res.render('level/index', { levels });
    }catch(error){
      res.status(500).render('500');
    }
  },

  async addPage(req, res){

    try{
    // récupérer les données postées
      const name = req.body.name;

      // demander l'ajout d'un Level à la couche modèle
      await Level.create({ name });

      // rediriger vers la page affichant les levels
      res.redirect('/levels');

    }catch(error){
      res.status(500).render('500');
    }
  },

  async removePage(req, res){

    try{
      // récupérer l'id du level à supprimer
      const { id } = req.params;

      // demander la suppression d'un Level à la couche modèle
      const levelToDelete = await Level.findByPk(id);

      if (levelToDelete){
        levelToDelete.destroy();
      }

      // rediriger vers la page affichant les levels
      res.redirect('/levels');

    }catch(error){
      res.status(500).render('500');
    }
  },


  async editPage(req, res){
    try{
      // récupérer l'id du level à supprimer
      const { id } = req.params;

      // on demande à la couche modèle de récupérer le niveau
      const levelToEdit = await Level.findByPk(id);

      if (levelToEdit){
        res.render('level/edit', { levelToEdit });
      }else{
        res.status(404).render('404');
      }

    }catch(error){
      res.status(500).render('500');
    }
  },

  async updatePage(req, res){

    try{
      // récupérer l'id du level à modifier
      const { id } = req.params;

      // récuper le nouveau label du Level
      const newName = req.body.name;

      // demander la mise à jour à la couche modèle
      const levelToUpdate = await Level.findByPk(id);
      levelToUpdate.name = newName;

      levelToUpdate.save();

      // rediriger vers la page affichant les levels
      res.redirect('/levels');

    }catch(error){
      res.status(500).render('500');
    }
  },
};

module.exports = levelController;
