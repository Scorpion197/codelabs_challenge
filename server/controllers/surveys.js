import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

export const createSurvey = (req, res) => {

    try {

        console.log("We are creating a survey");
        //for testing only 
        const data = fs.readFileSync(path.resolve('surveys.json')) ;
        const fileData = JSON.parse(data);
        const surveyQuestions = req.body; 

        fileData.questions.push(surveyQuestions);

        const newData = JSON.stringify(fileData);
        fs.writeFile('surveys.json', newData, err => {

            if (err) 
                console.log("Error while writing data");
                res.status(200).json({

                    "ACTION": "CREATION", 
                    "STATUS": "FAILED"
                })
        })

        res.status(200).json({
            'ACTION': 'CREATION', 
            'STATUS': 'SUCCESS'
        })


    }catch(error) {

        console.log("Error occured while creating survey: ", error);

    }
}