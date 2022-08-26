import { createRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addQuestion } from '../actions/questions';
import Button from './Button';
import Input from './Input';
import './NewPoll.css';

const NewPoll = () => {
  const [questionAdded, setQuestionAdded] = useState(false);
  const optionOneRef = createRef();
  const optionTwoRef = createRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (questionAdded) navigate('/');
  }, [questionAdded, navigate]);

  const handleSaveQuestion = (e) => {
    e.preventDefault();
    const optionOneText = optionOneRef.current.value;
    const optionTwoText = optionTwoRef.current.value;
    dispatch(addQuestion({ optionOneText, optionTwoText })).then(() => {
      setQuestionAdded(true);
    });
  };

  return (
    <div className="new-poll-container">
      <p className="text">Would You Rather</p>
      <p className="sub-text">Create your own poll</p>

      <form className="new-poll-form" onSubmit={handleSaveQuestion}>
        <Input
          label="First Option"
          placeholder="Option one"
          ref={optionOneRef}
        />
        <Input
          label="Second Option"
          placeholder="Option two"
          ref={optionTwoRef}
        />
        <Button label="Submit" type="submit" />
      </form>
    </div>
  );
};

export default NewPoll;
