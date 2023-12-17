import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Experience({ key, item, currentCardView }) {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (currentCardView) {
      currentCardView(item.num, inView);
    }
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
      <p onClick={() => currentCardView()} className="experience-card-right">
        {item.description}
      </p>
    </div>
  );
}
