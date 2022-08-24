import Avatar from './Avatar';
import './AvatarWithName.css';

const AvatarWithName = (props) => {
  const { size, user } = props;

  return (
    <div className="avatar-container">
      <Avatar size={size} userId={user.id} />
      <div>
        <p className="user-name">{user.name}</p>
        <p className="user-id">{user.id}</p>
      </div>
    </div>
  );
};

export default AvatarWithName;
