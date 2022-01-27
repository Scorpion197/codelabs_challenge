import * as actionTypes from './actionTypes';

const initialState = {

    count:0,
    questions: [{

        questionContext: '', 
        questionID: 0,
    }],
}

const questionReducer = (state = initialState, action) => {

    switch(action.type) {

        case actionTypes.ADD_QUESTION:

            return {
                ...state, 
                count: state.count + 1,
                questions: [...state.questions, {

                    questionContext: action.payload, 
                    questionID: state.count + 1,
                }]

            }

            break; 

        default:
            
            return state; 
            break; 
    }
}

export default questionReducer;