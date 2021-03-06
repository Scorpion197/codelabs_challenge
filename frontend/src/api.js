
const API = {

    postQuestions: async (questions) => {

        const endpoint = "http://localhost:9001/surveys/create_survey";
        const request = {

            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(questions) 
        }

        const response = await ( await fetch(endpoint, request)).json();
        return response;
    }, 

    getSurveysQuestion: async () => {

        const endpoint = "http://localhost:9001/surveys/send_surveyquestions";
        const request = {

            method: 'GET', 
            headers: {'Content-Type': 'application/json'}, 

        }

        const response = await (await fetch(endpoint, request)).json();
        return response;
    }, 

    sendSurveyResults: async (results) => {

        const endpoint = "http://localhost:9001/surveys/save_results";
        const request = {

            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(results),
        }

        const response = await (await fetch(endpoint, request)).json();

        return response;

    },

    fetchSurveyResults: async () => {

        const endpoint = "http://localhost:9001/surveys/survey_results";

        const request = {

            method: 'GET', 
            headers: {'Content-Type': 'application/json'}
        };

        const response = await (await fetch(endpoint, request)).json(); 

        return response;
    },
}

export default API;