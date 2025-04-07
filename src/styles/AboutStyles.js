// src/styles/AboutStyles.js
import styled from 'styled-components';

export const AboutWrapper = styled.main`
  text-align: center;
  margin-top: 6rem;
  padding: 0 1rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
