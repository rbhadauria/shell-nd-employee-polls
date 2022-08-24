import './Table.css';

const Table = ({ data, columns }) => {
  return (
    <table className="table">
      <thead className="thead">
        <tr>
          {columns.map((elem) => (
            <th key={elem.header}>{elem.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map((col) => {
              return <td key={col.id}>{col.assessor(row)}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
