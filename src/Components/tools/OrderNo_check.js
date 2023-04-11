import React, { useState, useEffect, useCallback    } from "react";
import axios from "axios";
import { Paginated } from "../util/Paginated";
import { COLUMNS } from '../util/Columns';

//點選row時，傳回給母畫面
function OrderNo_check(props) {

  let controller = new AbortController();

  const [isLoading, setIsLoading] = useState(false);

  const [selectedRowIds, setSelectedRowIds] = useState({});
  //點選的row id
  const [clickRowid, setClickRowid] = useState(null);

  // close/open modal
  const [modal, setModal] = useState(false);
  const setOn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setModal(!modal);
  };

  //點選row，得到id，更新明細資料
  const checkRow = (row) => {
    console.log(row.values.id)
    setClickRowid(row.values.id)
  };

  const fetchIdData =  async() => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${clickRowid}`);
    props.setListValue([{
      id: data.id,
      name: data.title,
      username: data.category,
      smallp: 's'
    }])

   //更新請購單號
    setSelectedRowIds(clickRowid);
    setModal(!modal);
  }

  //default table 資料來源
  const [data, setData] = useState([]);


  const isMountedRef = React.useRef(false)
  useEffect(() => {
    isMountedRef.current = true
    return () => {
      isMountedRef.current = false
    }
  }, [])


  const getData = useCallback(async () => {
    // setIsLoading(true);
    const users = await axios.get(`https://fakestoreapi.com/products`);
    const resdata = users.data;
    let newdata = [];
    for (var i = 0; i < resdata.length; i++) {
      var filters = Object.keys(resdata[i])
        .reduce((obj, key) => {
          obj[key] = resdata[i][key];
          return obj;
        }, {});
      newdata.push(filters)
    }
    console.log(newdata)
    setData(newdata)
    }, []);

//EROOR1，clickRowid 以為要render畫面，用useEffect dev，其實用prop state 也可以
  useEffect(() => {
    // let isMounted = true;
    getData();
    // return () => {
    //   isMounted = false;
    // };
    // return () => controller && controller.abort();
  }, [getData]);

  useEffect(() => {
    let isMounted = true;
    if (clickRowid) {
      fetchIdData();
    }
    return () => {
      isMounted = false;
    };
  }, [clickRowid]);


  // useEffect(() => {
  //   const controller = new AbortController()
  //   // const signal = controller.signal

  //   // const fetchIdData = async () => {
  //   //   const { data } = await axios.get(`https://fakestoreapi.com/products/${clickRowid}`,
  //   //     { signal: signal }
  //   //   )
  //   //   props.setListValue([{
  //   //     id: data.id,
  //   //     name: data.title,
  //   //     username: data.category,
  //   //     smallp: 's'
  //   //   }])
  //   //   //更新請購單號
  //   //   setSelectedRowIds(clickRowid);
  //   //   setModal(!modal);
  //   // }

  //   fetchIdData()

  //   return () => {
  //     controller.abort()
  //   }
  // }, [])



  return (
    <>
      <button className="btn btn-primary button_newitem" onClick={setOn}>
      ...
      </button>

      {modal &&
        <div className="modal-modal" onClick={setOn}>
          <div className="popup_inner"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="orderno">
              {data && <Paginated
                data={data}
                columns={COLUMNS}
                onRowSelectStateChange={setSelectedRowIds}
                onRowClickFunc={checkRow}
              />
              }
            </div>
            <button className="btn btn-light" onClick={setOn}>
              close
            </button>
            <button className="btn btn-primary" onClick={fetchIdData}>
              確定
            </button>
          </div>
        </div>
      }
    </>

  );
}

export default OrderNo_check;


