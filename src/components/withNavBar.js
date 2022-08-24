import Navbar from './Navbar';

const withNavBar = (component) => {
  return (
    <div>
      <Navbar />
      <div>{component}</div>
    </div>
  );
};

export default withNavBar;
