import React from 'react';


// const randomAge = () => {
//   Math.floor(Math.random() * 30)
// }

const home = (props) => {
  // return <p>I'm a {props.name} and I am {Math.floor(Math.random() * 30 )}!</p>
  return (
    <div className="homeImage">
    {/* <img src={'https://images.unsplash.com/photo-1436262513933-a0b06755c784?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'} /> */}
      <img src='https://images.unsplash.com/photo-1436262513933-a0b06755c784?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'/>
    </div>
  )


}

export default home;