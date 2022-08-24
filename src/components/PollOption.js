import Button from './Button';
import './PollOption.css';

const PollOption = (props) => {
  const { userVoted, option, handleVote, isSelected, totalVotes } = props;

  return (
    <div className="poll-option">
      <p>{option.text}</p>
      <div>
        <Button
          label={
            userVoted ? (isSelected ? 'Selected' : 'Not selected') : 'Click'
          }
          inline
          type="primary"
          disabled={userVoted}
          onClick={handleVote}
        />

        {userVoted ? (
          <>
            {' '}
            {option.votes.length} Votes,{' '}
            {parseInt((option.votes.length / totalVotes) * 100)}%
          </>
        ) : null}
      </div>
    </div>
  );
};

export default PollOption;
