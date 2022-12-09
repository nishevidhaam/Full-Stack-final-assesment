import {useState} from 'react';

const App = () => {
  const [num, setNum] = useState(0);

  function randomNumberInRange(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    setNum(randomNumberInRange(10007, 500007));
  };

  return (
    <div>
      <h2>My Magical number is {num}</h2>
      <button onClick={handleClick}>Magic Number</button>
    </div>
  );
};

export default App;
