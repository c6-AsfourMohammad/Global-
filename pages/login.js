import Navbar from "./../compoents/Navbar";

const login=()=>{
    return(
    <div className="login">
    
      <input className="emailPass" name="email" type="email"  placeholder="Your Email.."/>
      <input className="emailPass" name="pass" type="password" placeholder="Your Password.."/>
      <button className="log">login</button>

    </div>);
  }
  export default login;