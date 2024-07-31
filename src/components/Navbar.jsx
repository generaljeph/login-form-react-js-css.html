import { Link } from "react-router-dom"
function Navbar()  {
    return (
        <div>
            <ul>
            <li>
            <Link to = "/home">home</Link>
                </li>
                <li>
            <Link to = "/about">about</Link>
                </li>
                <li>
            <Link to = "/contact">contact</Link>
                </li>
               
            </ul>
        </div>
    )
}
export default Navbar