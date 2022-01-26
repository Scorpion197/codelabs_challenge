import express from 'express';
import fs from 'fs';

const router = express.Router();

export const createSurvey = (req, res) => {

    try {

        console.log("We are creating a survey");
        //for testing only 
        console.log(req.body);

        res.status(200).json({
            'ACTION': 'CREATION', 
            'STATUS': 'SUCCESS'
        })

    }catch(error) {

        console.log("Error occured while creating survey: ", error);

    }
}