import React, { useState, useEffect } from 'react';

function CodeUseEffect() {
  const [count, setCount] = useState(false);
  const [tit, setTit] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        setTit(json);
      })
  },);

  const text = () => {
    setCount(!count);

  }
  console.log('render');
  return (
    <div>
      {tit.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
        </div>
      ))}
      <button onClick={text}>
        <h1>{count ? 'True' : 'False'}</h1>
      </button>

    </div>
  );
}

export default CodeUseEffect;