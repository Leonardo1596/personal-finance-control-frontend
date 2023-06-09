import styled, { keyframes, css } from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;


export const DashboardSummaryContainer = styled.div`
  width: 100vw;
  animation: ${slideIn} 0.5s ease-in-out;
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
  position: relative;

  .skeleton-title {
    width: 130px;
    height: 25px;
    border-radius: 8px;

    @media screen and (max-width: 1024px) {
      width: 90px;
      height: 23px;
    }

    @media screen and (max-width: 768px) {
      width: 80px;
    }

    @media screen and (max-width: 576px) {
      height: 22px;
    }
  }

  .skeleton-value {
    width: 150px;
    height: 23px;
    border-radius: 8px;

    @media screen and (max-width: 1024px) {
      width: 110px;
      height: 23px;
    }

    @media screen and (max-width: 768px) {
      width: 100px;
    }

    @media screen and (max-width: 576px) {
      height: 22px;
    }
  }
`;

export const DashboardSummaryButton = styled.button`
  top: 16px;
  right: 20px;
  position: absolute;

  background-color: transparent;
  border: none;
  outline: none;
  color: #666;
  cursor: pointer;
  font-size: 1rem;

  @media screen and (max-width: 1024px) {
  top: 14px;
}

  @media screen and (max-width: 768px) {
    top: 13px;
    right: 15px
}

@media screen and (max-width: 500px) {
  top: 12px;
  right: 30px;
}
`;

export const DashboardSummaryItemTitle = styled.h2`
  margin: 0;
  font-size: 19px;

  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    font-size: 17px;
  }

  @media screen and (max-width: 500px) {
  font-size: 16px;
}
`;

export const DashboardSummaryItemValue = styled.p`
  margin: 0;
  font-size: 19px;
  font-weight: bold;
  margin-top: 0.5rem;

  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    font-size: 17px;
  }

  @media screen and (max-width: 500px) {
  font-size: 16px;
}
`;

export const DashboardSummaryHiddenValueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 50%;
  margin-top: 16px;
  padding-bottom: 5px;

  @media screen and (max-width: 1024px) {
  margin-top: 14px;
}

@media screen and (max-width: 768px) {
  margin-top: 13px;
}

@media screen and (max-width: 500px) {
  margin-top: 11px;
}
`;

export const DashboardSummaryHiddenValue = styled(FontAwesomeIcon)`
  width: 9px;
  margin: 0 2px;

  @media screen and (max-width: 1024px) {
  width: 11px;
}

@media screen and (max-width: 768px) {
  width: 9px;
  margin: 0 2px;
}
`;

export const EyeIcon = styled(FontAwesomeIcon)`
  margin-left: 5px;
  font-size: 20px;

  @media screen and (max-width: 1024px) {
  font-size: 19px;
}

@media screen and (max-width: 768px) {
  font-size: 17px;
}
`;