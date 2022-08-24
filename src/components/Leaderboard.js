import { useSelector } from 'react-redux';
import AvatarWithName from './AvatarWithName';
import Table from './Table';

const Leaderboard = () => {
  const users = useSelector((state) => state.users.users);
  let data = Object.values(users).sort((a, b) => {
    const aNum = Object.keys(a.answers).length + a.questions.length;
    const bNum = Object.keys(b.answers).length + b.questions.length;

    return bNum - aNum;
  });

  return (
    <div>
      <Table
        data={data}
        columns={[
          {
            header: 'Users',
            id: 'users',
            assessor: (d) => {
              return <AvatarWithName size={'small'} user={d} />;
            },
          },
          {
            header: 'Answered',
            id: 'answered',
            assessor: (d) => {
              return <div>{Object.keys(d.answers).length}</div>;
            },
          },
          {
            header: 'Asked',
            id: 'asked',
            assessor: (d) => {
              return <div>{d.questions.length}</div>;
            },
          },
        ]}
      />
    </div>
  );
};

export default Leaderboard;
