const bcrypt = require('bcrypt');
const Agent = require("../model/Agent");
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {

    bcrypt.hash(req.body.password,10)
        .then(hash =>{
            const user = new User({
                numAgent,
                grade,
                password: hash
            });
            user.save()
                .then(() => {
                    res.status(201).json({message: "Agent créé !"})
                } )
                .catch(error => res.status(400).json({ error } ));
        })


}
exports.login = (req, res, next) => {

    User.findOne({numAgent:req.body.numAgent})
        .then(user => {
            if (!agent){
                return res.status(401).json({message:"Paire log/mdp incorrecte"})
            }
            bcrypt.compare(req.body.password, agent.password)
                .then(valid => {
                    if (!valid){
                        return res.status(401).json({message:"Paire log/mdp incorrecte"})
                    }
                    res.status(200).json({
                        userId:agent._id,
                        token: jwt.sign(
                            {agentId: agent._id},
                            'RANDOM_TOKEN_SECRET',
                            {expiresIn: '24h'}
                        )
                    })
                })
                .catch(error => res.status(500).json({ error } ));
        })
        .catch(error => res.status(400).json({ error } ));


}