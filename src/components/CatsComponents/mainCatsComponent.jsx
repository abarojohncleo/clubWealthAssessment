import React, { useState, useEffect } from "react";
import cats from "../../APIs/cats";
import Cards from "./cards";

function MainCatsComponent() {
  const [currentCatIndex, setCurrentCatIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [catsData, setCatsData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    cats.get100Cats().then((response) => {
      setCatsData(response);
      setIsLoading(false);
    });
  }, []);

  const multipleCats = () => {
    setIsLoading(true);
    cats.get100Cats().then((response) => {
      setCatsData(response);
      setIsLoading(false);
    });
  };

  const randomCats = () => {
    setIsLoading(true);
    cats.getRandomCat().then((response) => {
      setCatsData(response);
      setIsLoading(false);
    });
  };



  const previousCat = () => {
    setCurrentCatIndex((prevIndex) => {
      if (prevIndex === 0) {
        return catsData.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const nextCat = () => {
    setCurrentCatIndex((prevIndex) => {
      if (prevIndex === catsData.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  console.log(catsData)

  return (
    <div className="App">
      <div>
        <button onClick={multipleCats}>Multiple</button>
        <button onClick={randomCats}>Random</button>
      </div>
      {isLoading ? (
        <div>Loading...</div> // Display loading state while fetching data
      ) : (
        <Cards 
          data={catsData}
          previousCat={previousCat}
          nextCat={nextCat}
          currentCatIndex={currentCatIndex}
        />
      )}
    </div>
  );
}

export default MainCatsComponent;
