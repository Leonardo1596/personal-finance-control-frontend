import styled from "styled-components";
import CurrencyInput from 'react-currency-input-field';

export const FormContainer = styled.form`
  margin-top: 50px;
  padding: 1rem;
  background-color: #f8f8f8;
`;

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 10px;
`;

export const FormTitle = styled.h2`
  margin: 0 0 1rem;
  text-align: center;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

export const FormInput = styled.input`
  padding: 0.5rem;
  width: 100%;
`;

export const StyledCurrencyInput = styled(CurrencyInput)`
  padding: 0.5rem;
  width: 100%;
`;

export const FormSelect = styled.select`
  padding: 0.5rem;
  width: 100%;
`;

export const FormButton = styled.button`
  padding: 0.5rem;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  margin-top: 3rem;
  width: 30%;
  height: 50px;
  font-size: 16px;
`;