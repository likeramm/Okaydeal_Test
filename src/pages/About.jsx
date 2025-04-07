import React from 'react';
import {
  AboutContainer,
  Title,
  Description,
  Section,
  SectionTitle,
  SectionText,
  TeamGrid,
  MemberCard,
  MemberRole,
  MemberName
} from '../styles/AboutStyles';

const About = () => {
  return (
    <AboutContainer>
      <Title>OKAYDEAL 소개</Title>
      <Description>
        OKAYDEAL은 역경매 방식을 기반으로 한 통합 플랫폼으로, 소비자와 공급자가 합리적인 가격과 효율적인 과정을 통해 서비스를 거래할 수 있도록 돕습니다.
        사용자는 원하는 서비스에 대해 조건을 입력하면, 여러 공급자들이 경쟁적으로 제안서를 제출하고, 그 중 가장 만족스러운 제안을 선택할 수 있습니다.
        이 과정은 시간과 비용을 모두 절약할 수 있으며, 투명하고 공정한 거래를 추구합니다.
      </Description>

      <Section>
        <SectionTitle>🌟 OKAYDEAL의 핵심 가치</SectionTitle>
        <SectionText>
          ✔️ **투명성** - 공급자의 이력, 제안 내용, 리뷰 등을 모두 확인할 수 있어 신뢰를 기반으로 한 거래가 가능합니다. <br />
          ✔️ **경쟁력** - 소비자가 조건을 입력하면 공급자가 역으로 제안하는 방식으로, 가격 경쟁력을 자연스럽게 확보할 수 있습니다. <br />
          ✔️ **다양성** - 디자인, 개발, 마케팅, 청소, 수리 등 다양한 분야의 서비스를 하나의 플랫폼에서 간편하게 이용할 수 있습니다. <br />
          ✔️ **사용자 중심 UX** - 직관적인 UI와 매끄러운 흐름으로 누구나 쉽게 이용할 수 있는 사용자 경험을 제공합니다.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>👨‍💻 프로젝트 팀원</SectionTitle>
        <TeamGrid>
          <MemberCard>
            <MemberRole>PM</MemberRole>
            <MemberName>컴퓨터소프트웨어공학과 23 조아람</MemberName>
          </MemberCard>
          <MemberCard>
            <MemberRole>FE</MemberRole>
            <MemberName>컴퓨터소프트웨어공학과 23 김우석</MemberName>
          </MemberCard>
          <MemberCard>
            <MemberRole>BE</MemberRole>
            <MemberName>의료IT공학과 21 임찬혁</MemberName>
          </MemberCard>
          <MemberCard>
            <MemberRole>BE</MemberRole>
            <MemberName>의료IT공학과 21 변형민</MemberName>
          </MemberCard>
          <MemberCard>
            <MemberRole>AI</MemberRole>
            <MemberName>정보통신공학과 20 박원규</MemberName>
          </MemberCard>
        </TeamGrid>
      </Section>
    </AboutContainer>
  );
};

export default About;
