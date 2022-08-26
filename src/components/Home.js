import { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllQuestions } from '../actions/questions';
import { getAllUsers } from '../actions/users';
import Button from './Button';
import PollsContainer from './PollsContainer';

const NEW_QUESTIONS_VIEW = 'NEW_QUESTIONS_VIEW';
const DONE_QUESTIONS_VIEW = 'DONE_QUESTIONS_VIEW';
const Home = () => {
  const [view, setView] = useState(NEW_QUESTIONS_VIEW);

  const { questions, authedUser } = useSelector((state) => ({
    questions: state.questions.questions,
    authedUser: state.auth.authedUser,
  }));

  const getAnsweredQuestions = () => {
    return Object.values(questions)
      .filter((ques) => {
        return (
          ques.optionOne.votes.includes(authedUser.id) ||
          ques.optionTwo.votes.includes(authedUser.id)
        );
      })
      .sort((a, b) => b.timestamp - a.timestamp);
  };
  const getUnAnsweredQuestions = () => {
    return Object.values(questions)
      .filter((ques) => {
        return !(
          ques.optionOne.votes.includes(authedUser.id) ||
          ques.optionTwo.votes.includes(authedUser.id)
        );
      })
      .sort((a, b) => b.timestamp - a.timestamp);
  };

  const toggleView = () => {
    if (view === NEW_QUESTIONS_VIEW) setView(DONE_QUESTIONS_VIEW);
    else setView(NEW_QUESTIONS_VIEW);
  };

  return (
    <div>
      {questions ? (
        <>
          <div style={{ margin: 10 }}>
            View{' '}
            <Button
              label={
                view === NEW_QUESTIONS_VIEW ? 'DONE questions' : 'New questions'
              }
              onClick={toggleView}
            />
          </div>
          {view === NEW_QUESTIONS_VIEW && (
            <PollsContainer
              title="New Questions"
              questions={getUnAnsweredQuestions()}
            />
          )}
          {view === DONE_QUESTIONS_VIEW && (
            <PollsContainer title="Done" questions={getAnsweredQuestions()} />
          )}
        </>
      ) : (
        'isLoading'
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  questions: state.questions.questions,
  authedUser: state.auth.authedUser,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getAllQuestions, getAllUsers }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Home);
