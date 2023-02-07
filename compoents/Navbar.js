import Link from "next/link";
import Style from './../styles/Navbar.module.css';
const Navbar=()=>{
    return(
    <nav className={Style.nav}>
        <div className={Style.container }>
            <div className={Style.logo}>Task</div>
            <ul>
                <li>
                    <Link href="/" className="Nav">Home</Link>
                </li>
                <li>
                <Link href="/about" className="Nav">about</Link>
                </li>
                <li>
                <Link href="/login" className="Nav">Sign in or Register</Link>
                </li>
            </ul>
        </div>
    </nav>
    );
  }
  export default Navbar;

  