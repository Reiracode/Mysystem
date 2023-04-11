import React from 'react';
// 請購單身
const ListTable = (props) => {
  const initialState = { id: null, name: "", username: "", smallp: "" };
  // props.bodyColumn
  return (
    <table className="table table-striped table-responsive-m">
      <thead>
        <tr>          
          {Object.keys(props.bodyColumn).map((i) => (
            i !== "id" && <th key={i}>{i}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.listBody.length > 0 ? (
          props.listBody.map((user) => (
            <tr key={user.id} data-id={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.smallp}</td>
              <td>
                <button
                  className="btn btn-primary button_newitem" data-low={(JSON.stringify(user))}
                  onClick={() => props.editRow(user)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => props.deleteRow(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ListTable;
