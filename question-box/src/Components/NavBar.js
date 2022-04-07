import 'bulma/css/bulma.min.css';

const NavBar = () => {
  // const url=""

  return (
    <div className="navbar">
      
      <h1>Phone a Friend</h1>
    
      <img
        src={require("./logo.png")}
        alt="logo"
      ></img>
      <a href="home">Home</a>
      <a href="create-card">Login</a>
      <a href="profile">Your Profile</a>
    </div>
  );
};

export default NavBar;