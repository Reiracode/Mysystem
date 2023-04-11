import React, { useState, Fragment } from "react";
// https://itnext.io/how-to-build-a-dynamic-controlled-form-with-react-hooks-2019-b39840f75c4f
const AddUserForm = (props) => {
  //定義新增資料的欄位
  //dynamic 表單 定義欄位
  const [user, setUser] = useState(props.bodyColumn);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  //enter/button 都可新增資料
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("ENTER PRESSED");
      handleCreate();
    }
  }

  //新增資料
  const handleCreate = () => {
    if (!user.name || !user.username) {
      console.log("please enter name/username value ")
      return;
    }
    props.addUser(user);
    // setUser(initialState);
    setUser(props.bodyColumn);
  };

  return (
    <div onKeyDown={onKeyDown}>
      <h3>ADD form</h3>
      {Object.keys(user).map((key) => {
        if (!(key == "id"))
          return (
            <Fragment key={key}>
              <label htmlFor={key}>{key}</label>
              <input
                type="text"
                name={key}
                value={user[key]}
                onChange={handleInputChange}
              />
            </Fragment>
          );
      })
      }

      <button className="btn btn-primary button_newitem" onClick={handleCreate}>
        Add new user
      </button>
    </div>
  );
};

export default AddUserForm;
