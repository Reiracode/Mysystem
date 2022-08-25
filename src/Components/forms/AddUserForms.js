import React, { useState,useEffect, Fragment } from "react";
// https://itnext.io/how-to-build-a-dynamic-controlled-form-with-react-hooks-2019-b39840f75c4f
const AddUserForm = (props) => {
  const initialFormState = { id: null, name: "", username: "", smallp: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (e) => {
    const formDataCopy = { ...user };
    formDataCopy[e.target.name] = e.target.value;
    setUser(formDataCopy);
  };

  const onKeyDown = (e) =>{
    if (e.key === "Enter") {
      console.log("ENTER PRESSED");
      addNew();
    }
  }

  document.addEventListener("keydown", onKeyDown); 

  const addNew = () => {
    if (!user.name || !user.username) return;
    props.addUser(user);
    console.log(user);
    const ary = Object.keys(user).map((key, index) => {
      if (!(key == "id")) console.log(key + index + user[key]);
    })
    console.log(ary)
    setUser(initialFormState);
  };

  return (
    <>
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

      <button className="btn" onClick={addNew}>
        Add new user
      </button>
      {/* <button onClick={() => props.SetShow(false)}>Cancel</button> */}
    </>
  );
};

export default AddUserForm;
