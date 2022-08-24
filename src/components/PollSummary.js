import { Link } from 'react-router-dom';
import Button from './Button';
import './PollSummary.css';
const PollSummary = (props) => {
  const { poll } = props;

  return (
    <div className="poll-summary-container">
      <div className="poll-summary-author">{poll.author}</div>
      <div className="poll-summary-timestamp">
        {new Date(poll.timestamp).toISOString()}
      </div>
      <div className="poll-summary-action">
        <Link to={`/questions/${poll.id}`}>
          <Button label="Show" inline type="outline" />
        </Link>
      </div>
    </div>
  );
};

export default PollSummary;
