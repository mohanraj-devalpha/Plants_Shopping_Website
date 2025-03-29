import { useEffect, useState } from "react";

const Counter = ({ end = 100, duration = 3000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(end / (duration / 16)); // Approximate frame duration
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);

      }

      setCount(start);
    }, 16); // Roughly 60 FPS

    return () => clearInterval(timer);
  }, [end, duration]);

  console.log(count)

  return (
    <div className="flex flex-col space-y-2">
      <span className=" font-bold text-2xl md:text-3xl lg:text-4xl ">
        {count}+
      </span>
      <p className="">Lorem ipsum consectetur</p>
    </div>
  );
};

export default Counter;
