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
      <Link to='/home'><li>View Classes</li></Link> 
      <Link to='/enrollment'><li>Class Search and Enroll</li></Link>
      <Link to='/'><li>Sign Out</li></Link>
    </ul>
  </div>
</>
  )
}
