import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

export const createSurvey = (req, res) => {

    try {

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

export const sendSurveyQuestions = (req, res) => {

    try {

        const rawData = fs.readFileSync(path.resolve('surveys.json'));
        const parsedData = JSON.parse(rawData); 

        res.send({

            "STATUS": "SUCCESS", 
            "data": parsedData,
        });
        
    } catch(error) {

        console.log("Error occured while retrieving data", error);

        res.send({

            "STATUS": "FAILED"
        })
    }

}

export const sendSurveyResults = (req, res) => {

    try {

        
        const data = fs.readFileSync(path.resolve('surveysResult.json'));
        const fileData = JSON.parse(data);
        const surveyResults = req.body;
        fileData.questions.push(surveyResults);

        const newData = JSON.stringify(fileData);
        fs.writeFile('surveysResult.json', newData, err => {

            if (err) {

                console.log("Error while writing data to json"); 
                res.status(200).json({

                    "ACTION": "SAVE RESULTS", 
                    "STATUS": "FAILED"
                })
            }
        });

    } catch(err) {
        console.log(err);
    }

    res.send(200).json({

        "ACTION": "SAVE RESULTS",
        "STATUS": "SUCCESS"
    })
}
