import Navbar from "./../compoents/Navbar";

const Layout=({children})=>{
    return(<div className="Layout">
     <Navbar/>
     {children}
    </div>);
  }
  export default Layout;