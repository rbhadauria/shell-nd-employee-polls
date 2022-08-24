import api from '../utils/api';

export const ALL_QUESTIONS = 'ALL_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';
export const SAVE_QUESTION_ANSWER_FAILURE = 'SAVE_QUESTION_ANSWER_FAILURE';

export const getAllQuestions = () => (dispatch) => {
  api.getAllQuestions().then((res) => {
    dispatch({
      type: ALL_QUESTIONS,
      payload: res,
    });
  });
};

export const addQuestion =
  ({ optionOneText, optionTwoText }) =>
  (dispatch, getState) => {
    const state = getState();
    const author = state.auth.authedUser.id;
    return api
      .addQuestion({ optionOneText, optionTwoText, author })
      .then((res) => {
        dispatch({
          type: ADD_QUESTION,
          payload: res,
        });
      });
  };

export const voteAnswer =
  ({ authedUser, qid, answer }) =>
  (dispatch) => {
    dispatch({
      type: SAVE_QUESTION_ANSWER,
      payload: { authedUser, qid, answer },
    });
    api.saveQuestionAnswer({ authedUser, qid, answer }).catch((err) => {
      dispatch({
        type: SAVE_QUESTION_ANSWER_FAILURE,
        payload: { authedUser, qid, answer },
      });
    });
  };
