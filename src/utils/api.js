import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA';

const api = {
  login: ({ username, password }) => {
    return _getUsers().then((users) => {
      if (users[username] && users[username].password === password)
        return users[username];
      else throw new Error('Invalid Credentials');
    });
  },
  getAllUsers: () => {
    return _getUsers();
  },
  getAllQuestions: () => {
    return _getQuestions();
  },
  addQuestion: (data) => {
    return _saveQuestion(data);
  },
  saveQuestionAnswer: (data) => {
    return _saveQuestionAnswer(data);
  },
};

export default api;
