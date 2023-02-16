const express = require('express');
const router = express.Router();
const intervention =require('../controller/Perso')

router.get('/',intervention.getPerso() );

router.post('/',intervention.createPerso() );

router.delete('/:id', intervention.deletePerso);