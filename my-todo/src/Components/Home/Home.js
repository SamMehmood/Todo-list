import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div style={{height: '100vh'}}>
      <div style={{textAlign: 'center'}}>
        <h1>
          <Link to="/login">Login</Link>
        </h1>
        <br />
        <h1>
          <Link to="/signup">Signup</Link>
        </h1>
        
        <h1>
          <Link to="/todo">Todo List</Link>
        </h1>
      </div>

      <br />
      <br />
      <br />

      {/* <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2> */}
    </div>
  );
}

export default Home;