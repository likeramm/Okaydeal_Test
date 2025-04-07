import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 4rem 2rem;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 3rem;
  }
`;

const TeamSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  span {
    font-size: 1rem;
    color: #333;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <h1>About OKAYDEAL</h1>
      <p>OKAYDEAL은 다양한 분야에서 합리적인 가격과 서비스를 연결하는 역경매 플랫폼입니다.</p>
      <TeamSection>
        <span><strong>PM :</strong> 컴퓨터소프트웨어공학과 23 조아람</span>
        <span><strong>FE :</strong> 컴퓨터소프트웨어공학과 23 김우석</span>
        <span><strong>BE :</strong> 의료IT공학과 21 임찬혁</span>
        <span><strong>BE :</strong> 의료IT공학과 21 변형민</span>
        <span><strong>AI :</strong> 정보통신공학과 20 박원규</span>
      </TeamSection>
    </AboutContainer>
  );
};

export default About;
