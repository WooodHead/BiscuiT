import React from 'react';
import styled from 'styled-components';

const Welcome = styled.div`
  text-align: center;
  margin: auto;
  display: flex;
  height: 80vh;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  .welcome--my-name {
    font-size: 36px;
    font-family: 'Montserrat';
    margin-bottom: 36px;
    font-weight: 200;
    padding: 0;
    span{
      font-weight: 800;
    }
  }
  .welcome--from {
    font-size: 24px;
    font-family: 'Calibri';
    color: hsl(0,0%,0%,55%);
    width: 70%;
    min-width: 230px;
    text-align: center;
    margin: 0 auto;
    font-weight: 200;
  }
`

const Home = () => {
  return (
    <>
      <Welcome>
        <h1 className="welcome--my-name">
          Hi, my name is
          <br />
          <span>Jean-Cédric Huet</span>
        </h1>
        <p className="welcome--from">I'm a Web Developer from Montréal.</p>
      </Welcome>
    </>
  );
};

export default Home;
