import * as actionTypes from './actionTypes';

const initialState = {

    answeredQuestions = [{

        questionContext: '', 
        questionID: 0, 
        questionAnswer: '',
    }],
}

const surveyReducer = (state = initialState, action) => {

    switch(action.type) {

        case actionTypes.GET_ANSWER:

            return {

                ...state, 
                answeredQuestions: [...state.answeredQuestions, {

                    questionContext: action.payload.questionContext, 
                    questionID: action.payload.questionID, 
                    questionAnswer: action.payload.questionAnswer,
                }]
            }
    }
}