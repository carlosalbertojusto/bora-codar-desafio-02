import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 13px;
  background: #d9cdf7;
  border-radius: 9.6px;

  @media (max-width: 760px) {
    flex-direction: column;
    height: auto;
    width: auto;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
  gap: 12px;
  margin-left: 13px;

  @media (max-width: 760px) {
    div {
      margin: auto;
    }
  }
  div {
    margin-top: 10px;
  }
`

export const Subtitle = styled.span`
  font-family: "Lato";
  font-size: 10px;
  line-height: 14px;
  font-weight: 300;

  color: rgba(39, 26, 69, 0.8);
`

export const Title = styled.h1`
  font-family: "Crimson Pro";
  font-weight: 600;
  font-size: 32px;
  line-height: 32px;
  color: #271a45;
`

export const PriceText = styled.span`
  font-family: "Lato";

  font-weight: 400;
  font-size: 16px;
  line-height: 16px;

  color: rgba(39, 26, 69, 0.8);
`

export const Image = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;

  img:nth-child(2) {
    cursor: pointer;
    position: absolute;
    left: 81.51%;
  }
  img:nth-child(2):hover {
    opacity: 0.7;
    background: url(src/assets/X.png);
    transition: all 0.2ms ease;
  }
`
