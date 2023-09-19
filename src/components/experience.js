import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function Experience({ key, item, testFunction }) {
  const [seal, setSeal] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0,
  });

  const altProps = testFunction;
  useEffect(() => {
    if (testFunction) {
      testFunction(item.num, inView);
    }
    setSeal((seal) => seal + 1);
  }, [inView]);

  return (
    <div ref={ref} className="experience-card" id={item.id}>
      <div className="experience-card-left">
        <h3>{item.name}</h3>
        {item.image && (
          <img
            className="experience-image"
            alt={item.altText}
            src={item.image}
          />
        )}
        <h6>{item.position}</h6>
        <p>{item.date}</p>
      </div>
      <p onClick={() => testFunction()} className="experience-card-right">
        {item.description}
      </p>
    </div>
  );
}
