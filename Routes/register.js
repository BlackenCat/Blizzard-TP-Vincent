const express = require('express');
const router = express.Router();
const register =require('../controller/register')

router.post('/',register.createAgent );

router.post('/',register.getOneAgent );

router.post('/:id',register.updateAgent );

