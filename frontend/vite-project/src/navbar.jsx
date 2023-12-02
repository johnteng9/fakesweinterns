import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
  <nav id="navbar">
  <label class="logo" id="logo">Cal<strong>Central</strong></label>
    <ul class="navbar-links">
        <a><li>John</li>
        <br></br>
        <li>Admin</li></a>
    </ul>
  </nav>
  <div id="menu">
    <ul>
      <a><li>View Classes</li></a> 
      <a><li>Class Search and Enroll</li></a>
      <Link to="/"><li>Sign Out</li></Link>
    </ul>
  </div>
</>
  )
}
