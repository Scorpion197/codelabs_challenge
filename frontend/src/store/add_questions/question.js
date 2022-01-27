import * as actionTypes from './actionTypes';

export const addQuestion = (questionContext) => {

    return {

        type: actionTypes.ADD_QUESTION, 
        payload: questionContext,
    }

}

export const questionAnswered = (questionID, questionContext, questionAnswer) => {

    return {

        type: actionTypes.QUESTION_ANSWERED, 
        payload: {

            questionID: questionID, 
            questionContext: questionContext, 
            questionAnswer: questionAnswer,
        }
    }
}