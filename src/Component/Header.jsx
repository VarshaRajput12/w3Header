import React from 'react'
import LeftComp from './LeftComp';
import RightComp from './RightComp'


function Header() {
  const arrObj = [
    { value: "Pro", class: "pro right_btn" },
    { value: "Get Certified", class: "certified right_btn" },
    { value: "Create Website", class: "Website right_btn" },
    { value: "Log in", class: "log_in right_btn" },
  ];
  const arrObj2 = [
    { value: "Tutorials", class: "tutorial left_btn" },
    { value: "References ", class: "reference left_btn" },
    { value: "Exercises", class: "exercise left_btn" },
    { value: "Sign Up", class: "sign_up left_btn" },
  ];

  
  return (
    <>
      <header className="container">
        <div className="left_side">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/1200px-W3Schools_logo.svg.png"
            alt="logo" className='image'
          />
          {arrObj2.map((ele) => (
            <LeftComp key={ele.value} value={ele.value} class={ele.class} />
          ))}
        </div>
        <div className="right_side">
          <i class="fa-solid fa-circle-half-stroke"></i>
          <i class="fa-solid fa-earth-americas"></i>
          <i class="fa-solid fa-magnifying-glass"></i>
          {arrObj.map((ele) => (
            <RightComp key={ele.value} value={ele.value} class={ele.class} />
          ))}
        </div>
      </header>
    </>
  );
}

export default Header