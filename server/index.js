import express from 'express'; 
import bodyParser from 'body-parser';
import cors from 'cors';

//routing 
import surveyRoutes from './routes/surveys.js';

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use((req, res ,next) => {

    res.header("Access-Control-Allow-Origin", "*")
    next()
})


app.use('/surveys', surveyRoutes);

app.listen(9001, () => console.log("listening on port: 9001"));
