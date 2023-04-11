import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "../Context";
import AddUserForm from "../Components/forms/AddUserForm";
import EditUserForm from "../Components/forms/EditUserForm";
import ListTable from "../Components/tables/ListTable";
import OpenModal from "../Components/tools/OpenModal";
import Dept from "../Components/tools/dept.json";


import singleton from "../Singleton";
import axios from "axios";
// confirm dialog
// https://www.taniarascia.com/crud-app-in-react-with-hook //

const PrForm = () => {
  let navigate = useNavigate();
  // global state:userno
  const { userno, dep } = useAuthState();
  const today = new Date().toISOString().substring(0, 10);

  //表頭資料
  const initialFormState = { username: userno, userdep: dep, userdate: today };
  const [listHead, setListHead] = useState(initialFormState);

  //delete update create
  //表身資料
  const bodyColumn = { id: null, name: "", username: "", smallp: "" };
  const [listBody, setListBody] = useState([]);

  //操作 : editRow / deleteRow  
  const [currentItem, setCurrentItem] = useState([]);

  //close/open modal 
  const [show, setShow] = useState(false);
  //判斷open form 是add /edit
  const [editMode, setEditmode] = useState(false);

  // const handleModal = () => {
  //   setShow(!show);
  // }

  //+請購項目
  const showModal = () => {
    setShow(!show); 
    setEditmode(false)
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setListHead({ ...listHead, [name]: value });
  };

  //CRUD  
  //create
  const addUser = (item) => {
    if (listBody.length == 0) {
      item.id = listBody.length + 1;
    } else {
      let maxid = listBody.slice(-1)[0].id;
      item.id = maxid + 1;
    }
    setListBody([...listBody, item]);
  };

  //update data close modal
  const updateUser = (id, user) => {
    setEditmode(true)
    setListBody(listBody.map((item) => (item.id === id ? user : item)));
    setShow(false);
  };

  //操作ChildComponent: ListTable : editRow  
  const editRow = (item) => {
    setShow(true);
    setEditmode(true);
    setCurrentItem({
      id: item.id,
      name: item.name,
      username: item.username,
      smallp: item.smallp
    });
  };

  //操作ChildComponent: ListTable : deleteRow  
  const deleteRow = (id) => {
    setListBody(listBody.filter((item) => item.id !== id));
  };



  async function makeGetRequest() {
    let payload = {
      heads: listHead,
      bodys: listBody,
    };

    console.log(payload);
    //********* create *********
    // axios
    //   .post("/customer", payload)
    //   .then((res) => {
    //     console.table(res.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    // ********* DELETE *********
    // let delno = "19";
    // axios.delete(`/customers/${delno}`).then((res) => console.log(res.data));
  }

  //  submit form 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    if (!listBody.length) {
      alert("請選單");
      return;
    }
    console.log(JSON.stringify(listHead));
    let data = {
      header: listHead,
      header_detail: listBody,
    };
    console.log(JSON.stringify(data));

    axios.post("https://reqres.in/api/listBody", data)
      .then((res) => {
        const ressponse = res.data;
        if (ressponse.createdAt) {
          alert("SUCCESS")
          navigate('/poform')
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section className="container contact">
      <h1>PR請購單</h1>
      <div className="flex_form">
        <form id="myForm">
          <div className="flex-large">
            <div className="form-row">
              {Object.keys(initialFormState).map((key) => {
                // if (!(key == "userdate")) {
                return (
                  <div className="form-group col-md-6" key={key}>
                    <label htmlFor={key}>{key}</label>
                    <input
                      type={key !== 'userdate' ? "text" : "date"}
                      className="form-control"
                      id={key}
                      name={key}
                      value={listHead[key]}
                      onChange={handleInputChange}
                    />
                  </div>
                );
              })
              }
            </div>
          </div>
        </form>


        <div className="flex-list">
          <OpenModal
            show={show}
            handleClose={showModal}
            onClickOutside={showModal}
          >
            {!editMode
              ? (<AddUserForm
                addUser={addUser}
                bodyColumn={bodyColumn}
              />)
              : (
                <EditUserForm
                  currentItem={currentItem}
                  updateUser={updateUser}
                />
              )}
          </OpenModal>
          <button className="btn btn-primary button_newitem" type="button" onClick={showModal}>
            +請購項目
          </button>

          <ListTable
            listBody={listBody}
            editRow={editRow}
            deleteRow={deleteRow}
            bodyColumn={bodyColumn}
          />
        </div>


        <button className="btn btn-warning button_submit" onClick={handleSubmit}>
          submit
        </button>
      </div>
    </section>
  );

};

export default PrForm;
