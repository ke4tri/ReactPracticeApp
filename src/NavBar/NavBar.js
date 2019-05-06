import React from 'react';


const Navbar = (props) => {
  // return <p>I'm a {props.name} and I am {Math.floor(Math.random() * 30 )}!</p>
  return (
    <div className="NavBar">
      <nav class="navbar navbar-expand-lg navbar-dark bg-warning">
  <a class="navbar-brand text-dark" href="#">Wonolo</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link ml-5 text-dark" href="#">Job Seeker <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link ml-5 text-dark" href="#">Business Login</a>
      </li>
    </ul>
    {/* <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
    </div>
  )


}

export default Navbar;