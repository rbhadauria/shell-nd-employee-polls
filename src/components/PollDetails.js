import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { voteAnswer } from '../actions/questions';
import Avatar from './Avatar';
import PollOption from './PollOption';

import './PollDetails.css';
import Page404 from './Page404';

const PollDetailsContainer = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const { questions, authedUser } = useSelector((state) => {
    return {
      questions: state.questions.questions,
      authedUser: state.auth.authedUser,
    };
  });

  if (questions && !questions[params.questionId]) {
    return <Page404 />;
  }

  if (!questions) return <div>Is Loading ...</div>;

  const question = questions[params.questionId];

  const hasVoted =
    question.optionOne.votes.includes(authedUser.id) ||
    question.optionTwo.votes.includes(authedUser.id);
  const totalVotes =
    question.optionOne.votes.length + question.optionTwo.votes.length;

  const voteHandler = (option) => {
    dispatch(
      voteAnswer({
        authedUser: authedUser.id,
        qid: question.id,
        answer: option,
      })
    );
  };
  return (
    <div>
      <div>
        <h2>Poll by {question.author}</h2>
        <Avatar size="large" userId={question.author} />
        <h2>Would You Rather</h2>
        <div className="options-container">
          <PollOption
            option={question.optionOne}
            handleVote={() => voteHandler('optionOne')}
            userVoted={hasVoted}
            isSelected={question.optionOne.votes.includes(authedUser.id)}
            totalVotes={totalVotes}
          />
          <PollOption
            option={question.optionTwo}
            handleVote={() => voteHandler('optionTwo')}
            userVoted={hasVoted}
            isSelected={question.optionTwo.votes.includes(authedUser.id)}
            totalVotes={totalVotes}
          />
        </div>
      </div>
    </div>
  );
};

export default PollDetailsContainer;
