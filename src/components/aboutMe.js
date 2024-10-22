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
            I am a 3rd year Computer Science major at UCLA from Los Altos,
            California. This past summer, I interned at Snowflake as a
            Technology Alliances Intern where I leveraged my programming
            knowledge to build a dashboard for the Partner Sales team to assist
            them in driving value. At UCLA, I am involved in numerous clubs
            including DevX, ACM TeachLA, UPE, and Awaken A Cappella. In my free
            time, I enjoy singing, hiking, going out, and watching Netflix to
            name a few.
          </p>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
