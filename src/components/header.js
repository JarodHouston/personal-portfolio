import myImage from "../images/royce-awaken-me.jpg";

export default function Header() {
  return (
    <div>
      <div id="header-container">
        <h1 className="header">Jarod Houston</h1>
        <p className="header-bio">3rd year Computer Science major at UCLA</p>
        <div className="pic-container">
          <img className="header-pic" src={myImage}></img>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
