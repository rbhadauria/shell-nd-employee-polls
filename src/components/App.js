import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Leaderboard from './Leaderboard';
import Home from './Home';
import NewPoll from './NewPoll';
import PollDetailsContainer from './PollDetails';
import Navbar from './Navbar';
import { getAllQuestions } from '../actions/questions';
import { getAllUsers } from '../actions/users';
import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function App(props) {
  const { questions, getAllUsers, getAllQuestions, authedUser } = props;

  const location = useLocation();

  useEffect(() => {
    if (!questions) {
      getAllQuestions();
      getAllUsers();
    }
  }, [getAllQuestions, getAllUsers, questions]);

  if (!authedUser) {
    return <Navigate to={'/login'} replace state={{ from: location }} />;
  }

  return (
    <div className="App">
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/leaderboard" exact element={<Leaderboard />} />
          <Route path="/add" exact element={<NewPoll />} />
          <Route
            path="/questions/:questionId"
            exact
            element={<PollDetailsContainer />}
          />
        </Routes>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  questions: state.questions.questions,
  authedUser: state.auth.authedUser,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getAllQuestions, getAllUsers }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
