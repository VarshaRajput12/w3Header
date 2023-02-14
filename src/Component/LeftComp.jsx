import React from 'react'

function LeftComp(props) {
  return (
    <>
      <button className={props.class}>{props.value}</button>
    </>
  );
}

export default LeftComp