import { ADD_QUESTION, SAVE_QUESTION_ANSWER } from '../actions/questions';
import { ALL_USERS } from '../actions/users';

const initialState = {
  users: undefined,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_USERS:
      return { ...state, users: action.payload };
    case SAVE_QUESTION_ANSWER: {
      const { authedUser, qid, answer } = action.payload;
      let users = state.users;
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer,
          },
        },
      };
      return { ...state, users };
    }
    case ADD_QUESTION: {
      debugger;
      const { author, id } = action.payload;
      let users = state.users;
      users = {
        ...users,
        [author]: {
          ...users[author],
          questions: users[author].questions.concat(id),
        },
      };
      return { ...state, users };
    }
    default:
      return state;
  }
};

export default usersReducer;
