import React, { useEffect, useRef } from "react";
import "./Rating.css";

function Rating({ ratingNum }) {
  const ratingBar = useRef(null);

  const ratingStroke = () => {
    const ratingInt = Math.round(ratingNum * 100)

    if(ratingInt > 70) {
      return '#4caf50'
    } else if (ratingInt > 40) {
      return '#f5a623'
    } else if (ratingInt > 0) {
      return '#ff4500'
    }
  }
  useEffect(() => {
    const chartPath = ratingBar;
    chartPath.current.setAttribute(
      "d",
      describeArc(50, 50, 40, 0, ratingNum * 360, 0)
    );

    function describeArc(x, y, radius, startAngle, endAngle) {
      var start = polarToCartesian(x, y, radius, endAngle);
      var end = polarToCartesian(x, y, radius, startAngle);
      var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
      var d = [
        "M",
        start.x,
        start.y,

        "A",
        radius,
        radius,
        0,
        largeArcFlag,
        0,
        end.x,
        end.y,
      ].join(" ");
      return d;
    }

    function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
      var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
      return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians),
      };
    }
  }, [ratingNum]);

  return (
    <div id="chart-container" className="rating">
      <div id="chart-center" className="rating__num">
        {Math.round(ratingNum * 100)}
        <span>%</span>
      </div>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#ccc"
          strokeWidth="3"
        />
        <path
          id="chart-path"
          ref={ratingBar}
          fill="none"
          stroke={ratingStroke()}
          strokeWidth="6"
        />
      </svg>
    </div>
  );
}

export default Rating;
