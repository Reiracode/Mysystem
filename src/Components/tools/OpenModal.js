import React, { useRef } from "react";

const OpenModal = (props) => {
  let ref = useRef(null);
  
  const handleClickOutsides = (event) => {
    console.log(event)
    if (ref.current && !ref.current.contains(event.target)) {
      props.onClickOutside();
    }
  };

  const showHideClassName = props.show
    ? "modal-modal"
    : "modal-modal display-none";
  
  return (
    <div className={showHideClassName} onClick={handleClickOutsides}>
      <section className="flex-crud" ref={ref}>
        {props.children}
        <button className="btn btn-danger button_close" onClick={props.handleClose}>Close</button>

        {/* <button onClick={props.handleClose}>Cancel</button> */}
      </section>
    </div>
  );
};


export default OpenModal;