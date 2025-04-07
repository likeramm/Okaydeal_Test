import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// 둥실둥실 떠오르는 애니메이션 정의
const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

// 전체 섹션 Wrapper
export const MainWrapper = styled.main`
  text-align: center;
  margin-top: 6rem;
  padding: 0 1rem;
`;

// 타이틀
export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// 설명 텍스트
export const Description = styled.p`
  font-size: 1.1rem;
  color: #555;
  max-width: 600px;
  margin: 0 auto 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// 알아보기 버튼 (둥실둥실)
export const ActionButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #0077ff;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  animation: ${float} 2.5s ease-in-out infinite;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005fcc;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.6rem 1.2rem;
  }
`;

// 페이지 이동용 버튼 (예: Link 기반)
export const Button = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  color: white;
  background-color: #0077ff;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 2rem;
  animation: ${float} 2.5s ease-in-out infinite;

  &:hover {
    background-color: #005fcd;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.6rem;
    font-size: 1rem;
  }
`;
