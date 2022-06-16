import React, { useEffect, useState } from "react";
import styled from "styled-components";

import backgroundImage from "./lightman.png";

const App = () => {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    const url = "https://api.adviceslip.com/advice";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.slip.advice);
        setAdvice(json.slip.advice);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Wrapper>
      <Background src={backgroundImage} alt="background" />
      <Title className='red'>Fetch Data from an API</Title>
      <Description>{advice}</Description>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  padding-top: 150px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  text-align: center;
`;

const Description = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 48px;
  color: #ffffff;
  text-align: center;
`;

const Background = styled.img`
  position: absolute;
  width: 100%;
  top: 0px;
  z-index: -1;
`;
