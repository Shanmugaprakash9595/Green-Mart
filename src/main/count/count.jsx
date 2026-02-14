import React, { useEffect, useState } from "react";
import "./count.css";

function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 3000;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <p className="icon-title">
      {count}
      {suffix}
    </p>
  );
}

function Count() {
  return (
    <section className="hero-wrap">
      <div className="icon-section">
        <h2 className="count-title">INDIA'S LARGEST AGRICULTURE PLATFORM</h2>
        <div className="count-icon">
          <div className="count-icon-sec">
            <Counter end={100} suffix="+" />
            <p className="icon-subtitle">Brands</p>
          </div>

          <div className="count-icon-sec">
            <Counter end={25} suffix="M+" />
            <p className="icon-subtitle">Farmers Served</p>
          </div>

          <div className="count-icon-sec">
            <Counter end={5000} suffix="+" />
            <p className="icon-subtitle">Products</p>
          </div>

          <div className="count-icon-sec">
            <Counter end={100} suffix="%" />
            <p className="icon-subtitle">Pincode Served</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Count;
