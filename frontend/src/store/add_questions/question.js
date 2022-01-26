import * as actionTypes from './actionTypes';

export const addQuestion = (questionContext) => {

    return {

        type: actionTypes.ADD_QUESTION, 
        payload: questionContext,
    }

}