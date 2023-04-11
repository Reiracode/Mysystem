import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "../Context";
import EditUserForm from "../Components/forms/EditUserForm";
import ListTable from "../Components/tables/ListTable";
import OpenModal from "../Components/tools/OpenModal";
import OrderNo_check from "../Components/tools/OrderNo_check";

// import ChildComponent from "./ChildComponent";
import singleton, { Recursive } from "../Singleton";
import axios from "axios";

// 無法新增資料，依請購單進行採購
// confirm dialog
//https://www.taniarascia.com/crud-app-in-react-with-hooks/

//button in form fetch data

const PoForm = () => {
  const test = Recursive("221004")
  let navigate = useNavigate();
  // global state:userno
  const { userno, dep } = useAuthState();
  const today = new Date().toISOString().substring(0, 10);
  const initialFormState = {
    username: userno || '',
    userdep: dep || '',
    userdate: today || '',
    checkno: "no" || '',
    newno: "newno" || '',
  };

  //表頭資料
  const [listHead, setListHead] = useState(initialFormState);

  //表身資料
  const bodyColumn = { id: null, name: "", username: "", smallp: "" };
  const [listBody, setListBody] = useState([]);
  const [listValue, setListValue] = useState("");

  //操作 : editRow / deleteRow    
  const [currentItem, setCurrentItem] = useState({});
  //open modal 
  const [show, setShow] = useState(false);


 

  const showModal = () => {
    setShow(!show);
  };


  //dynamic form: 綁定的state值對應到每個組件的name屬性，所以可以直接抓組件name的屬性來更改state中的資料，
  // 至於加上中括號是為了讓JavaScript知道那是變數，而不會把它當成changeName來處理
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setListHead({ ...listHead, [name]: value });
  };

  // const handleListData = (data) => {
  //   //把OrderNo_CHeck return的值data，更新FakeData
  //   setFakeData(data);
  // };

  // child component
  // const handleData = (data) => {
  //   setData(data);
  // };
  const updateUser = (id, updatedUser) => {
    console.log(id)
    console.log(updatedUser)
    setListBody(listBody.map((item) => (item.id === id ? updatedUser : item)));
    showModal();
  };


  const editRow = (item) => {
    setShow(true);
    setCurrentItem({
      id: item.id,
      name: item.name,
      username: item.username,
      smallp: item.smallp
    });
  };

  const deleteRow = (id) => {
    setListHead({ ...listHead, checkno: '' });
    setListBody(listBody.filter((item) => item.id !== id));
  };

  // ---------------------
  useEffect(() => {
    console.log(listValue)
    //return 請購單號
    if (!listValue) return;
    console.log(listValue[0])

    setListHead({ ...listHead, checkno: listValue[0].id });
    setListBody(listValue);

    // return () => {
    //   setListBody([]);
    // };
  }, [listValue]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!listBody.length) {
      alert("請選單");
      return;
    }

    const data = {
      name: "morpheus",
      job: "leader",
    };

    fetch("https://reqres.in/api/listBody", {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        // console.log("Success:", JSON.stringify(response));
        console.log(response);
        if (response.createdAt) {
          alert("post成功");

          // setFormType("sucess");
          // 送出成功後，轉到Inbox
          //傳遞parat
          navigate('/Inbox', { state: { id: "090605", listno: "00004" } })
        }
      })
      .catch((error) => console.error("Error:", error));

  };

  return (
    <section className="container contact">
      <h1>採購單</h1>
      <div className="flex_form">
        {/* <form id="myForm"> */}
        <div id="myForm">
          <div className="flex-large">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputUsername">員工姓名</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputUsername"
                  name="username"
                  value={listHead.username || ''}
                  onChange={handleInputChange}
                  placeholder="員工姓名"
                  autoFocus={true}
                  required
                />
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="inputUserdep">員工部門</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputUserdep"
                  name="userdep"
                  value={listHead.userdep || ''}
                  onChange={handleInputChange}
                  placeholder="員工部門"
                  required
                />
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="inputUsertime">需用時間</label>
                <input
                  type="date"
                  className="form-control"
                  id="inputUsertime"
                  name="userdate"
                  value={listHead.userdate || ''}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="selectListno">請購單號</label>
                <div className="input-group ">
                  <input
                    type="text"
                    className="form-control"
                    id="selectListno"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="請購單號"
                    name="checkno"
                    value={listHead.checkno || ''}
                    onChange={handleInputChange}
                    readOnly
                  />

                </div>

              </div>

              <div>
                <OrderNo_check
                  setListValue={setListValue}
                  // onlistData={handleListData}
                />
                <p>OrderNo_check from child component:</p>
                {/* <p>{JSON.stringify(fakedata)}</p> */}
              </div>
            </div>
          </div>

        </div>
        {/* </form> */}
        {/* <div>
          <OrderNo_check
            setListValue={setListValue}
            onlistData={handleListData}
          />
          <p>OrderNo_check from child component:</p>
          <p>{JSON.stringify(fakedata)}</p>
        </div> */}

        <div className="flex-list">
          <OpenModal
            show={show}
            handleClose={showModal}
            onClickOutside={showModal}
          >
            {
              <EditUserForm
                currentItem={currentItem}
                updateUser={updateUser}
                setShow={setShow}
              />
            }
          </OpenModal>

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

      {/* <div>
        <ChildComponent onData={handleData} />
        <p>Data from child component:</p>
        <p>{JSON.stringify(data)}</p>
      </div> */}
    </section>
  );
};

export default PoForm;
