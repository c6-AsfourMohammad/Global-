import Navbar from "./../compoents/Navbar";

const login=()=>{
    return(<div className="login">
      <Navbar/>
      <input name="Name" type="email"/>
      <input name="pass" type="password"/>

    </div>);
  }
  export default login;