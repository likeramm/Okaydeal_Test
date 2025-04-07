// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MainWrapper, Title, Description, ActionButton } from '../styles/HomeStyles';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };

  return (
    <MainWrapper>
      <Title>다양한 분야의 역경매 통합 플랫폼</Title>
      <Description>
        OKAYDEAL은 소비자와 공급자를 효율적으로 연결하여, 합리적인 가격에 최고의 서비스를 제공합니다.
      </Description>
      <ActionButton onClick={handleClick}>알아보기</ActionButton>
    </MainWrapper>
  );
};

export default Home;
