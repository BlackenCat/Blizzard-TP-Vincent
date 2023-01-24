const Agent = require("../model/Agent");

exports.createAgent = (req, res, next) => {

    delete req.body._id;

    const agent = new Agent({
        ...req.body
    });

    Agent.save()
        .then(() => res.status(201).json({ message: "Compte d'agent créé !!" }) )
        .catch(error => res.status(400).json({ error } ));

}
exports.getOneAgent = (req, res, next) => {

    Agent.findById(req.params.id)
        .then(agent => res.status(200).json(agent))
        .catch(error => res.status(400).json({ message:"Agent introuvable" }))

}
exports.updateAgent = (req, res, next) => {

    Agent.updateOne({_id: req.params.id }, { ...req.body, _id: req.params.id } )
        .then(() => res.status(200).json({ message: "Agent modifié !" }))
        .catch(error => res.status(400).json({ message: "Pas autorisé !" } ))

}