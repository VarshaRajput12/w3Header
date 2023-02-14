import React from 'react'

function RightComp(props) {
  return (
    <>
        <button className={props.class}>{props.value}</button>
    </>
  )
}

export default RightComp