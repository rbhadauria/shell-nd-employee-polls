import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA';

describe('test _saveQuestion', () => {
  it('saves question with valid inputs', async () => {
    // const questions = await _getQuestions();

    const newQuestion = {
      optionOneText: 'question text 1',
      optionTwoText: 'question text 2',
      author: 'test_user',
    };

    const addedQuestion = await _saveQuestion(newQuestion);
    expect(addedQuestion.author).toEqual(newQuestion.author);
    expect(addedQuestion.optionOne.text).toEqual(newQuestion.optionOneText);
    expect(addedQuestion.optionTwo.text).toEqual(newQuestion.optionTwoText);

    const questionsAfterUpdate = await _getQuestions();
    expect(questionsAfterUpdate).toHaveProperty(addedQuestion.id);
  });

  it('throws error with invalid input', async () => {
    const newQuestion = {
      optionOneText: 'question text 1',
      optionTwoText: 'question text 2',
    };

    await expect(_saveQuestion(newQuestion)).rejects.toEqual(
      'Please provide optionOneText, optionTwoText, and author'
    );
  });
});

describe('test _saveQuestionAnswer', () => {
  it('saves answers with valid inputs', async () => {
    let questionId = 'xj352vofupe1dqz9emx13r';
    let userId = 'sarahedo';

    await expect(
      _saveQuestionAnswer({
        authedUser: userId,
        qid: questionId,
        answer: 'optionOne',
      })
    ).resolves.toEqual(true);

    const users = await _getUsers();
    const questions = await _getQuestions();

    expect(users[userId].answers).toHaveProperty(questionId, 'optionOne');
    expect(questions[questionId].optionOne.votes).toContain(userId);
  });

  it('throws error with invalid input', async () => {
    await expect(_saveQuestionAnswer({ qid: 'test' })).rejects.toEqual(
      'Please provide authedUser, qid, and answer'
    );
  });
});
