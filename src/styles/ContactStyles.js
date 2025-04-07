import styled from 'styled-components';

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  text-align: center;
  padding: 0 1rem;
`;

export const Message = styled.h2`
  font-size: 1.8rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;
