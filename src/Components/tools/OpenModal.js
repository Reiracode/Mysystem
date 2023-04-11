import React, { useRef } from "react";

const OpenModal = (props) => {
  let ref = useRef(null);

  const handleClickOutsides = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      props.onClickOutside();
    }
  };

  return (
    <>
      {props.show && <div className="modal-modal" onClick={handleClickOutsides}>
        <section className="flex-crud" ref={ref}>
          {props.children}
          <button className="btn btn-danger button_close" onClick={props.handleClose}>Close</button>
        </section>
      </div>
      }

    </>
  );
};

/* notes:const showHideClassName = props.show
 ? "modal-modal"
 : "modal-modal display-none";
用狀態控制 div是否show，不需用css
不同思維
*/

export default OpenModal;