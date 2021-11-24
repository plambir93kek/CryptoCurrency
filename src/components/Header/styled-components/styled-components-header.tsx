import styled from "styled-components";

export const HeaderContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 30px;
   background-color: rgba(0,0,0,0.4);
   height: 120px;
   box-shadow: 0px 0px 40px 40px rgba(0,0,0,0.4);
   border-radius: 20px;
`;

interface SearchInputProps {
  width: string;
  shadow?:boolean
}

export const SearchInput = styled.input<SearchInputProps>`
  width: ${props => props.width};
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(45px);
  box-shadow: ${(props)=>props.shadow===true? '-2px 3px 20px rgb(0 0 0 / 41%)' : ''};
  border: 1px solid hsla(0,0%,100%,.2);
  outline: none;
  padding: 10px;
  color: rgba(255,255,255, 0.5);
  padding-left: 40px;
  font-size: 15px;
  @media (max-width: 430px){
    max-width: 60vw;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  width: max-content;
  margin: 0;
  padding:0;
`;

export const SearchIconContainer = styled.div`
  position: absolute;
  left: 10px;
  top:0;
  bottom: 0;
  margin: 0;
  width: min-content;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.7;
  }
`;