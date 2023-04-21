import { useState } from "react";

export function ReadMore({ text, maxLength }) {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleIsTruncated = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <>
      <p>
        {isTruncated ? text.slice(0, maxLength) : text}
        {text.length > maxLength && (
          <button onClick={toggleIsTruncated}>
            {isTruncated ? "Read more" : "Read less"}
          </button>
        )}
      </p>
    </>
  );
}
