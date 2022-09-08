import React, {useState} from 'react';
let funcCount = new Set();
const NoCallback = (props) => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };
  const decrementCounter = () => {
    setCount(count - 1);
  };

  const incrementNumber = () => {
    setNumber(number + 1);
  };

  funcCount.add(incrementCounter);
  funcCount.add(decrementCounter);
  funcCount.add(incrementNumber);
  console.log('No useCallback:' + funcCount.size);

  return (
    <div>
      No Callback Count: {count}
      <button onClick={incrementCounter}>Increase counter</button>
      <button onClick={decrementCounter}>Decrease Counter</button>
      <button onClick={incrementNumber}>increase number</button>
    </div>
  );
};

export default NoCallback;
