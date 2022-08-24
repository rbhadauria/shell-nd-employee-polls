import './Avatar.css';

const Avatar = (props) => {
  const { size, userId, ...imgProps } = props;
  return (
    <img
      className={size}
      alt="avatar"
      src={`https://avatars.dicebear.com/api/avataaars/${userId}.svg`}
      {...imgProps}
    />
  );
};

export default Avatar;
