import React from "react";
import './Buttons.css'
const Buttons = ({ coins, page, prevPage, nextPage, handlePage }) => {
  return (
    <div className="btn-container">
      <button className="prev-btn" onClick={prevPage}>
        prev
      </button>
      {coins.map((item, index) => {
        return (
          <button
            key={index}
            className={`page-btn ${index === page ? "active-btn" : null}`}
            onClick={() => handlePage(index)}
          >
            {index + 1}
          </button>
        );
      })}
      <button className="next-btn" onClick={nextPage}>
        next
      </button>
    </div>
  );
};

export default Buttons;
