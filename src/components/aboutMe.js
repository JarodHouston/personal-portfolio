import Kerckhoff from "../images/kerckhoff-pic.jpg";

export default function AboutMe() {
  return (
    <div>
      <div id="about-container">
        <div className="about-left">
          <h2>About Me</h2>
          <div>
            <img
              src={Kerckhoff}
              alt="Picture of me (Jarod) smiling with arms crossed in front of Kerckhoff at UCLA"
              width="500px"
              className="about-pic"
            ></img>
          </div>
        </div>
        <div className="about-right">
          <p>
            I am a 2nd year Computer Science major at UCLA from Los Altos,
            California. I enjoy hiking in the mountains, singing pop songs,
            traveling to new places, and hanging out with friends. My passion
            for coding stemmed from my interest in game development back in
            elementary school when we learned how to use Scratch. I joined the
            Hack Club at my high school where I learned HTML, CSS, and Python.
            Since then, I have also coded in Java, C++, JavaScript, and more
            recently, React.
          </p>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
