import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  &.fixed {
    position: fixed;
    background-color: #fff;
    padding: 1rem 0;
    width: 100dvw;
    align-items: center;
    box-shadow: 18px 8px 8px 7px rgb(0 0 0 / 20%);
  
    .header__top {
        display: none;
    }
`;

const HeaderTop = styled.section`
    
`;

export { HeaderContainer };
