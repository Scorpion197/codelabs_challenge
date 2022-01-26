import express from 'express';

//controlers 
import { createSurvey } from '../controllers/surveys.js';

const router = express.Router();

router.get('/', (req, res) => {

    res.send("this works");
})

router.post('/create_survey', createSurvey);
export default router;