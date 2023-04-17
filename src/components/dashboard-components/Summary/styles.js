import styled from 'styled-components';

export const DashboardSummary = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 1200px;
  padding: 1rem;
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
`;

export const DashboardSummaryItemValue = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  margin-top: 0.5rem;
`;