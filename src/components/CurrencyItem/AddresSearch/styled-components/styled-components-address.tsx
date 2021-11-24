import styled, { keyframes } from "styled-components";

const show = keyframes`
  0%{
      height: 0;
  }
  100% {
      height: auto;
  }
`;

export const AddressSearchContainer = styled.div`
margin: 0 auto;
animation: ${show}  0.6s forwards;
overflow:hidden;
box-shadow: -2px 3px 20px rgb(0 0 0 / 30%);
`;

export const BalanceContainer = styled.div`
display: flex;
margin-top: 15px;
gap: 10px;
justify-content: center;
`;