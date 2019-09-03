const db = require("../models");

module.exports = {
    findAll: function(req, res) {     
      db.Books.find(req.query)
        .then(dbBook => res.json(dbBook))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
      db.Books.findById(req.params.id)
        .then(dbBook => res.json(dbBook))
        .catch(err => res.status(422).json(err));
    },
    create:  function(req, res) {
      console.log(req.file);
      db.Books.create(req.body)
        .then(dbBook => res.json(dbBook))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      db.Books.findOneAndUpdate({ id: req.params.id }, req.body)
        .then(dbBook => res.json(dbBook))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.Books.findById(req.params.id)
        .then(dbBook => dbBook.remove())
        .then(dbBook => res.json(dbBook))
        .catch(err => res.status(422).json(err));
    }
  };