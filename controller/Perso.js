const Agent = require("../model/Compte");

exports.createComte = (req, res, next) => {

    delete req.body._id;

    const compte = new Compte({
        ...req.body
    });

    Compte.save()
        .then(() => res.status(201).json({ message: "Compte créé !!" }) )
        .catch(error => res.status(400).json({ error } ));

}
exports.getCompte = (req, res, next) => {

    Compte.findById(req.params.id)
        .then(agent => res.status(200).json(agent))
        .catch(error => res.status(400).json({ message:"Compte introuvable" }))

}

exports.deleteCompte = (req, res, next) => {

    Compte.deleteOne( {_id: req.params.id })
        .then(() => res.status(200).json({ message: "Compte supprimé !" }))
        .catch(error => res.status(400).json({ error } ))

}