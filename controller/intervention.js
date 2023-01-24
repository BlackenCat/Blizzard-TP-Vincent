const Agent = require("../model/intervention");

exports.createIntervention = (req, res, next) => {

    delete req.body._id;

    const intervention = new Intervention({
        ...req.body
    });

    Intervention.save()
        .then(() => res.status(201).json({ message: "Intervention créé !!" }) )
        .catch(error => res.status(400).json({ error } ));

}
exports.getAgentIntervention = (req, res, next) => {

    Agent.findById(req.params.id)
        .then(agent => res.status(200).json(agent))
        .catch(error => res.status(400).json({ message:"Agent introuvable" }))

}

exports.GetAllIntervention = (req, res, next) => {

    Intervention.find()
        .then(things => res.status(200).json(things))
        .catch(error => res.status(400).json({ error } ))

}
exports.deleteIntervention = (req, res, next) => {

    Intervention.deleteOne( {_id: req.params.id })
        .then(() => res.status(200).json({ message: "Intervention supprimé !" }))
        .catch(error => res.status(400).json({ error } ))

}