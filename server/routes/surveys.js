import express from 'express';

//controlers 
import { createSurvey, sendSurveyQuestions, getSurveyResults, exposeSurveyResults } from '../controllers/surveys.js';

const router = express.Router();

router.get('/', (req, res) => {

    res.send("this works");
})

router.post('/create_survey', createSurvey);
router.get('/send_surveyquestions', sendSurveyQuestions);
router.post('/save_results', getSurveyResults);
router.get('/survey_results', exposeSurveyResults);
export default router;