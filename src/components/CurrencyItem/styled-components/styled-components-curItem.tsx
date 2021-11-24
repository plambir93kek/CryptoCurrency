import styled, { keyframes } from "styled-components";

const showAddress = keyframes`
  0% {
      min-height: 91px;
  }
  100% {
      min-height: 230px;
  }
`;

const hideAddress = keyframes`
  0% {
      min-height: 230px;
  }
  100% {
      min-height: 91px;
  }
`;

export const CurrencyItemContainer  = styled.div`
display: flex;
flex-direction: column;
background-color: rgba(0,0,0,0.4);
border: 1px solid hsla(0,0%,100%,.2);
border-radius: 10px;
cursor: pointer;
overflow: hidden;
&.enter-active {
  animation: ${showAddress} 0.5s forwards;
};
&.exit-active {
  animation: ${hideAddress} 0.1s forwards;
};
&.exit-done {
    min-height: 91px;;
};
&.enter-done {
    min-height: 230px;
};
 &:hover {
     opacity: 0.8;
 }
`;

export const CurrencyItemInfo = styled.div`
   display:grid;
   grid-template-columns: repeat(6 , 1fr);
   grid-template-rows: 91px;
   align-items: center;
   justify-items: center;
   min-height: 91px;
   @media (max-width:430px){
    grid-template-columns: repeat(5 , 1fr);
  }
`;

export const CurrencyItemIcon = styled.img`
  width: 42px;
  height: 42px;
  @media (max-width:430px){
    display:none;
  }
`;

export const NameContainer = styled.div`
  justify-self: start;
  box-sizing:border-box;
  padding-left: 2vw;
  align-self: center;
`;

export const Symbol = styled.p`
  color: white;
  margin:0;
`;
interface CurrencyItemTextProps{
  color?: string;
}
export const CurrencyItemText = styled.p<CurrencyItemTextProps>`
   color: ${props=> props.color? props.color : 'white'};
   margin:0;
   @media (max-width:430px){
    font-size: 12px;
  }
`;

const rotateIcon = keyframes`
    0%{
        transform: rotate(0deg)
    }
    100% {
        transform: rotate(180deg)
    }
`

export const ArrowIcon = styled.div`
  margin:0;
  padding:0;
&.enter-active {
  animation: ${rotateIcon} 0.2s forwards;
};
&.exit-active {
  animation: ${rotateIcon} 0.2s reverse;
};
&.exit-done {
    transform: rotate(0deg);
};
&.enter-done {
    transform: rotate(180deg);
};
`;