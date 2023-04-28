import styled from 'styled-components';

export const DashboardSummaryContainer = styled.div`
  width: 100vw;
  `

export const DashboardSummaryArea = styled.div`
  max-width: 980px;
  margin: auto;

  @media screen and (max-width: 1024px) {
    max-width: 768px;
    padding: 0 16px;
  }

  @media screen and (max-width: 768px) {
    max-width: 576px;
  }
`

export const DashboardSummary = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 1200px;
  padding: 1rem;

  @media screen and (max-width: 1024px) {
    max-width: 768px;
    padding: 0 16px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    padding: 1rem 0;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const DashboardSummaryItem = styled.div`
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const DashboardSummaryItemTitle = styled.h2`
  margin: 0;

  @media screen and (max-width: 500px) {
  font-size: 16px;
}
`;

export const DashboardSummaryItemValue = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  margin-top: 0.5rem;

  @media screen and (max-width: 500px) {
  font-size: 16px;
}
`;