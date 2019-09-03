const db = require("../models");

module.exports = {
    findAll: function(req, res) {     
      db.Clothes.find(req.query)
        .then(dbCloth => res.json(dbCloth))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
      db.Clothes.findById(req.params.id)
        .then(dbCloth => res.json(dbCloth))
        .catch(err => res.status(422).json(err));
    },
    create:  function(req, res) {
      console.log(req.file);
      db.Clothes.create(req.body)
        .then(dbCloth => res.json(dbCloth))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      db.Clothes.findOneAndUpdate({ id: req.params.id }, req.body)
        .then(dbCloth => res.json(dbCloth))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.Clothes.findById(req.params.id)
        .then(dbCloth => dbCloth.remove())
        .then(dbCloth => res.json(dbCloth))
        .catch(err => res.status(422).json(err));
    }
  };