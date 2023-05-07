import styled from "styled-components";

export const HeaderContainer = styled.header`
  /* background-color: #2e2e2e; */
  background-color: #6A5ACD;
  color: #fff;
`;

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    cursor: pointer;
    font-size: 20px;
  }

  @media screen and (max-width: 768px) {
    padding: 10px 16px
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
`;