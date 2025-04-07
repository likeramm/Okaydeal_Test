import styled from 'styled-components';

export const AboutContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
  color: #222;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
`;

export const Section = styled.div`
  margin-bottom: 3rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const SectionText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const MemberCard = styled.div`
  padding: 1.2rem;
  border: 1px solid #eee;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  background-color: #fafafa;
  text-align: center;
`;

export const MemberRole = styled.p`
  font-weight: 700;
  font-size: 1rem;
  color: #0077ff;
  margin-bottom: 0.5rem;
`;

export const MemberName = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;
