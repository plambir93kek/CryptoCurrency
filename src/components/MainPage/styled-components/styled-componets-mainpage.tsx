import styled, { keyframes } from "styled-components";

export interface MainContainerProps {
   loading: boolean;
}

export const MainPageContainer = styled.div<MainContainerProps>`
   display:${props=> props.loading===true? 'none' : 'flex'};
   flex-direction: column;
   justify-content: center;
   margin: auto;
   background-color: rgba(0,0,0,.3);
   padding: 10px 30px;
   width: 80vw;
   border-radius: 10px;
    @media (max-width: 430px){
      padding: 10px;
      width: 90%;
    };
`

export const TableHead = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  justify-items: center;
  @media (max-width: 430px){
    grid-template-columns: repeat(5, 1fr);
  };
`;

export const TableHeadText = styled.p`
   color: rgba(255,255,255, 0.5);
   @media(max-width: 850px){
     text-align: center;
   };
   @media(max-width: 500px){
     text-align: center;
     font-size: 12px;
   }
  `;

export const ButtonContainer = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 20px;
   margin-bottom: 20px;
`;

export const Button = styled.button`
  outline: none;
  background-color: rgba(31,115,241,.3);
  padding: 5px;
  box-shadow: 6px 6px 13px rgb(0 0 0 / 25%);
  border: 1px solid hsla(0,0%,100%,.2);
  border-radius: 20px;
  font-size: 14px;
  color: white;
  padding: 12px 8rem;
  font-size: 16px;
  width: fit-content;
  cursor:pointer;
  &:hover {
     opacity: 0.8;
  }
  @media (max-width: 400px){
    padding: 12px 25px;
  }
`;

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg)
  }
`;

export const LoaderText = styled.p`
  font-size: 24px;
`;
export const LoaderContainter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin-top: 30px;
  color: rgba(255,255,255, 0.5);
`;

export const Loader = styled.div`
  width: 100px;
  height: 100px;
  border: 3px dashed rgba(255,255,255, 0.5);;
  animation: ${loading} 1s infinite;
  transition: 1s;
  border-radius: 50%;
`;

export const EmptyContainer = styled.div`
@media (max-width:430px){
    display:none;
  }
`;