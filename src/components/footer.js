import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="footer-container">
      <a href="https://github.com/JarodHouston" target="_blank">
        <BsGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/jarod-houston-81335a246"
        target="_blank"
      >
        <BsLinkedin />
      </a>
    </div>
  );
}
