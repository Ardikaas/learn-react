const Navbar = (props) => {
  return(
    <div>
      <h1>{props.navTit}</h1>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  )
}

export default Navbar;