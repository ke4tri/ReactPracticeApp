import React from 'react';


// const randomAge = () => {
//   Math.floor(Math.random() * 30)
// }

const person = (props) => {
  // return <p>I'm a {props.name} and I am {Math.floor(Math.random() * 30 )}!</p>
  return (
    <div>
      <p>I'm a {props.name} and I am {props.age}!</p>
      <p>{props.children}</p>
    </div>
  )


}

export default person;