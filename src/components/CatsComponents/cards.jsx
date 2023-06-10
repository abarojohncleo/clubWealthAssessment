import React, { useState, useEffect, useRef } from "react";
import '../../assets/cards.css';

function Cards(props) {
  let {data, previousCat, nextCat, currentCatIndex} = props
  
  return (
    <div>
      {data.length > 0 ? (
        <div className="slideshow-container">
          <div className="slide">
            <img
              src={data.length > 1 ? data[currentCatIndex].url : data[0].url}
              alt="sample"
              className="cat-img"
            />
          </div>
        </div>
      ) : (
        <div>No cats data available.</div>
      )}
      <br />
      { data.length > 1 &&
        <div style={{ textAlign: "center" }}>
          <button onClick={previousCat}>❮</button>
          <button onClick={nextCat}>❯</button>
        </div>
      }
    </div>
  )
}

export default Cards;
