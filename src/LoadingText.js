import React, { useState, useEffect } from 'react';
import Skeleton from '@mui/material/Skeleton';
import Container from '@mui/material/Container';

import './App.css';

function LoadingText() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/photos")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }, 2500);
    setCounter(counter + 1);

    return () => clearTimeout(timer);
  }, []);

  const array = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40
  ];

  function randomNum() {
    let randomWidth = Math.floor(Math.random() * 90) + 60;
    return randomWidth + "%";
  }

  function randomNum2() {
    let numOfCharacters = Math.floor(Math.random() * 60) + 10;
    return numOfCharacters;
  }

  const filteredData = () => {
    let Boom = [];
    if (!loading) {
      Boom = Array.from(data).slice(0, 40);
      return Boom;
    }
    return [{ title: "Oh Shit" }, { title: "Something went wrong" }];
  };

  return loading ? (
    <div className="App">
      <div style={{}}>How many rerenders: {counter}</div>
      <Container
        maxwidth="sm"
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
          width: "80%"
        }}
      >
        <ul
          style={{
            display: "grid",
            listStyleType: "none",
            margin: "auto",
            width: "80%"
          }}
        >
          {array.map((data, key) => (
            <li key={key} style={{ marginTop: "1px", marginBottom: '1px', width: `${randomNum()}` }}>
              <Skeleton sx={{margin: 'auto'}}
                animation="wave"
                variant="text"
              height='100%'
                width="80%"
              />
            </li>
          ))}
        </ul>
      </Container>
    </div>
  ) : (
    <div className="App">
      <div style={{}}>How many rerenders: {counter}</div>
      <div>
        {filteredData().map((data, key) => (
          <div key={key}>{data.title.substring(0, randomNum2())}</div>
        ))}
      </div>
    </div>
  );
}

export default LoadingText;
