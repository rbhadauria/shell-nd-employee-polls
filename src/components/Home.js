import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllQuestions } from '../actions/questions';
import { getAllUsers } from '../actions/users';
import PollsContainer from './PollsContainer';

const Home = () => {
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

  return (
    <div>
      {questions ? (
        <>
          <PollsContainer
            title="New Questions"
            questions={getUnAnsweredQuestions()}
          />
          <PollsContainer title="Done" questions={getAnsweredQuestions()} />
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
