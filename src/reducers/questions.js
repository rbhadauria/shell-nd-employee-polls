import {
  ADD_QUESTION,
  ALL_QUESTIONS,
  SAVE_QUESTION_ANSWER,
  SAVE_QUESTION_ANSWER_FAILURE,
} from '../actions/questions';

const initialState = {
  questions: undefined,
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_QUESTIONS:
      return { ...state, questions: action.payload };
    case ADD_QUESTION:
      return {
        ...state,
        questions: Object.assign({}, state.questions, {
          [action.payload.id]: action.payload,
        }),
      };
    case SAVE_QUESTION_ANSWER: {
      const { authedUser, qid, answer } = action.payload;
      return {
        ...state,
        questions: {
          ...state.questions,
          [qid]: {
            ...state.questions[qid],
            [answer]: {
              ...state.questions[qid][answer],
              votes: state.questions[qid][answer].votes.concat([authedUser]),
            },
          },
        },
      };
    }
    case SAVE_QUESTION_ANSWER_FAILURE:
    default:
      return state;
  }
};

export default questionReducer;
