import React, { useState } from 'react';

function Vidu() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const [tests, setTests] = useState(0);
  const [text, setText] = useState('');
  const handleClickMinus = () => {
    setCount(number - tests);
  };

  const handleInputChange = (event) => {
    const test = Number(event.target.value);
    setNumber(test);
  };
  const handleInputChange2 = (event) => {
    const tes = Number(event.target.value);
    setTests(tes);
  }
  const textvidu = (event) => {
    const vidu = event.target.value;
    setText(vidu);
  }
  return (
    <div>
      <h1>{text} {count}</h1>
      <input type='text' value={text} placeholder='nhập chữ' onChange={textvidu}></input>
      <input
        type="number"
        value={number}
        onChange={handleInputChange}
        placeholder="Nhập số"
      />
      <input
        type='number'
        value={tests}
        onChange={handleInputChange2}
        placeholder='nhập số'></input>
      <button onClick={() => setCount((number + tests))}>Click+</button>
      <button onClick={handleClickMinus}>Click-</button>
    </div>
  );
}

export default Vidu;
