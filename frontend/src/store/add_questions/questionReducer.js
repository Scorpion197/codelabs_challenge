import * as actionTypes from './actionTypes';

const initialState = {

    count:0,
    questions: [{

        questionContext: '', 
        questionID: 0,
    }],

    answeredQuestions: [{

        questionContext: '', 
        questionID: 0, 
        questionAnswer: '',

    }]
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
        
            case actionTypes.QUESTION_ANSWERED:

                return {

                    ...state, 
                    count: state.count + 1,
                    answeredQuestions: [...state.answeredQuestions, {

                        questionContext: action.payload.questionContext,
                        questionID: action.payload.questionID,
                        questionAnswer: action.payload.questionAnswer,

                    }]
                }
                
                break;

        default:
            
            return state; 
            break; 
    }
}

export default questionReducer;