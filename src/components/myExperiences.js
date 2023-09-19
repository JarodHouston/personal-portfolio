import Experience from "./experience.js";
import { VscTriangleRight } from "react-icons/vsc";
import { VscTriangleLeft } from "react-icons/vsc";
import { useInView } from "react-intersection-observer";
import { createRef, useRef, useState } from "react";

export default function MyExperiences(props) {
  // const [ref1, view1] = useInView();
  // const elementsRef = useRef(
  //   props.experience.map(() => {
  //     createRef();
  //   })
  // );
  const [testSeal, setTestSeal] = useState(0);
  let num = 0;
  props.experience.map((item) => {
    num++;
  });

  const [values, setValues] = useState(Array(num).fill(false));

  const testFunction = (num, viewState) => {
    // setTestSeal((testSeal) => testSeal + num);
    const newValues = values.map((value, i) => {
      return i === num - 1 ? viewState : value;
    });
    setValues(newValues);
  };

  const experiences = props.experience.map((item, index) => {
    return <Experience key={item.id} item={item} testFunction={testFunction} />;
  });

  return (
    <div>
      <div id="experience-container">
        <h2>Experience</h2>
        <div className="experience-grid">{experiences}</div>
        <div className="experience-btn-container">
          <button
            className="experience-button-left"
            onClick={() => {
              let idNum = -1;
              for (let i = num - 1; i > 0; i--) {
                if (values.at(i)) {
                  idNum = i;
                  break;
                }
              }
              if (idNum < 1) {
                idNum = 1;
              }
              if (idNum > num) {
                idNum = num;
              }
              let myId = idNum.toString();
              const element = document.getElementById(myId);
              element.style.scrollMarginLeft = "100px";
              element.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }}
          >
            <div className="experience-btn-content">
              <VscTriangleLeft /> Prev
            </div>
          </button>
          <button
            className="experience-button-right"
            onClick={() => {
              let idNum = -1;
              let index = 0;
              values.every((value) => {
                if (value) {
                  idNum = index + 2;
                  return false;
                }
                index++;
                return true;
              });
              if (idNum < 1) {
                idNum = 1;
              }
              if (idNum > num) {
                idNum = num;
              }
              let myId = idNum.toString();
              const element = document.getElementById(myId);
              element.style.scrollMarginRight = "100px";
              element.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }}
          >
            <div className="experience-btn-content">
              Next <VscTriangleRight className="right-btn-arrow" />
            </div>
          </button>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
