const express = require('express');
const router = express.Router();
const intervention =require('../controller/Intervention')

router.get('/',intervention.getAgentIntervention() );

router.post('/',intervention.createIntervention() );

router.get('/',intervention.GetAllIntervention );

router.delete('/:id', intervention.deleteIntervention);