import React, { useState, Fragment } from "react";

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentItem);
//是否要比對有否更改？
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });  
  };

  //enter/button 都可新增資料
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      handleUpdate();
    }
  }

  const handleUpdate = () => {
    props.updateUser(user.id, user);
  };

  return (
    <div onKeyDown={onKeyDown}>
      <h3>Editform</h3>
      {Object.keys(props.currentItem).map((key) => {
        if (!(key == "id" || key == "datatime"))
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
      <button className="btn" onClick={handleUpdate}>
        edit confirm
      </button>
    </div>
  );
};

export default EditUserForm;
