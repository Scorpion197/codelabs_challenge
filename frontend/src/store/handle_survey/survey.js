import * as actionTypes from './actionTypes';

export const getAnswer = (questionId, questionContext, questionAnswer) => {

    return {

        type: actionTypes.GET_ANSWER,
        payload: {

            questionID: questionId, 
            questionContext: questionContext,
            questionAnswer: questionAnswer,
        }
    }
}

