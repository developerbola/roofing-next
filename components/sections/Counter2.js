import { useEffect, useState, useCallback } from "react";
import CountUp from "../elements/CountUp";
import api from "../api/api";

export default function Counter2() {
  const [inViewport, setInViewport] = useState(false);
  const [res, setRes] = useState([]);

  const handleIntersection = useCallback((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInViewport(true);
        observer.unobserve(entry.target); // Stop observing after the element is in view
      }
    });
  }, []);

  useEffect(() => {
    // Fetch data
    const getData = async () => {
      try {
        const { data } = await api.homeCounter();
        setRes(data);
      } catch (error) {
        console.error("Error fetching counter data:", error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    // Using IntersectionObserver for better performance
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // relative to viewport
      threshold: 0.5, // trigger when 50% of the element is in view
    });

    const targetElement = document.querySelector(".counter-area-two");
    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => observer.disconnect();
  }, [handleIntersection]);

  return (
    <div className="counter-area-two" id="counter">
      <div className="container">
        <div className="counter-inner wow fadeInUp" data-wow-delay=".2s">
          <div className="row justify-content-center">
            {res.length > 0 &&
              res.map((item, index) => (
                <div key={index} className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="counter-item-two">
                    <div className="counter-icon">
                      <img
                        src={`/assets/img/icon/counter_icon0${index + 1}.svg`}
                        alt=""
                      />
                    </div>
                    <div className="counter-content">
                      {inViewport && (
                        <CountUp end={item.number} duration={10} />
                      )}
                      <p>{item?.name}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
