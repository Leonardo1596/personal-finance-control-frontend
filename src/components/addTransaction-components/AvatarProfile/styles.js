import styled from 'styled-components';

export const AvatarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const AvatarImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  list-style-type: none;
  padding: 0;
  margin: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const DropdownMenuItem = styled.li`
  color: black;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
  }
`;