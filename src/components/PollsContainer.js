import PollSummary from './PollSummary';
import './PollContainer.css';

const PollsContainer = (props) => {
  return (
    <div className="poll-container">
      <div className="poll-container-title">{props.title}</div>
      <div className="poll-container-area">
        {props.questions.map((ques) => {
          return <PollSummary key={ques.id} poll={ques} />;
        })}
      </div>
    </div>
  );
};

export default PollsContainer;
