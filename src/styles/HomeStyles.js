// src/styles/HomeStyles.js
import styled from 'styled-components';

export const MainWrapper = styled.main`
  text-align: center;
  margin-top: 6rem;
  padding: 0 1rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  font-size: 1.1rem;
  color: #555;
  max-width: 600px;
  margin: 0 auto 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ActionButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #0077ff;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005fcc;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.6rem 1.2rem;
  }
`;