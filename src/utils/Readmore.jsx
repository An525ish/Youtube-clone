import React, { useState } from "react";
import "../App.css";

const ReadMore = ({ children }) => {
  
  const newText = children || "";
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  
    return (
      <p className="text">
        {isReadMore ? newText?.slice(0, 200) : newText}
        <br/>
        <span onClick={toggleReadMore} className="read-or-hide mt-2 font-semibold">
            {
                JSON.stringify(newText).length > 200 && (isReadMore ? "...Show more" : " Show less")
            }
        </span>
      </p>
    );
  };

  export default ReadMore;