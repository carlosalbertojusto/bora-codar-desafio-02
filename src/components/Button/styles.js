import styled from "styled-components"

export const ButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;

  border: 0.5px solid #271a45;
  box-shadow: 0px 8px 15px rgba(217, 205, 247, 1);
  border-radius: 999px;
  background-color: #d9cdf7;

  &:hover {
    cursor: pointer;
    border: 1px solid #271a50;
    transition: all 0.8ms ease;
    box-shadow: 0px 15px 20px rgba(39, 26, 69, 0.1);
    outline: none;
  }
`

export const ButtonText = styled.span`
  font-family: "Lato";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #271a45;
`
