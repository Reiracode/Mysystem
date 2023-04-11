import React, { useState } from 'react';

const ChildComponent = (props) => {
  const [clickRowId, setClickRowId] = useState(null);

  const handleClick = (id) => {
    console.log(id)
    setClickRowId(id);
  };

  const fetchIdData = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${clickRowId}`);
    const data = await response.json();
    props.onData(data);
  };

  return (
    <div>
      <p>Click on a random ID:</p>
      <button onClick={() => handleClick(1)}>ID 1</button>
      <button onClick={() => handleClick(2)}>ID 2</button>
      <button onClick={() => handleClick(3)}>ID 3</button>
      <button onClick={() => fetchIdData()}>Confirm</button>
    </div>
  );
};

export default ChildComponent;