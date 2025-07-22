import styled from 'styled-components';

export default function Section() {
  return (
    <SectionContainer>
      <Content>
        <Title>Machine Learning Made Easy</Title>
        <Description>
          Quickly generate, deploy and integrate custom machine learning AI
          models trained on your data.
        </Description>
        <JoinButton>JOIN WAITLIST</JoinButton>
        <Subtitle>What we do:</Subtitle>
        <Description>
          We found out that training and deploying custom machine learning
          models that fit your necessities is difficult, so we automated it for
          you. Unleash the hidden power of your data.
        </Description>
      </Content>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 45vh;
  background: #111;
  color: #eee;
  padding: 32px 8px 32px 8px;
  margin-top: 48px;
  @media (min-width: 600px) {
    margin-top: 0;
  }
  @media (min-width: 800px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 700px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  margin-top: 50px;
  background: linear-gradient(180deg, #e0e0e0 0%, #8a8a8a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent !important;
  background-clip: text;
  color: transparent !important;
  width: 100%;
  display: inline-block;
  text-align: center;
  white-space: normal;
  @media (min-width: 600px) {
    white-space: nowrap;
  }
  @media (min-width: 800px) {
    font-size: 2.6rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 32px 0 8px 0;
  color: #eee;
  @media (min-width: 800px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  color: #8a8a8a;
  font-size: 1rem;
  margin-bottom: 16px;
  @media (min-width: 800px) {
    font-size: 1.25rem;
  }
`;

const JoinButton = styled.button`
  background: linear-gradient(0deg, #f4f4f4 0%, #696363 100%);
  color: #222;
  border: none;
  border-radius: 6px;
  padding: 12px 56px;
  font-size: 1.1rem;
  font-weight: 900;
  margin-top: 32px;
  margin-bottom: 24px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  transition: filter 0.2s, transform 0.18s cubic-bezier(0.4, 0.2, 0.2, 1),
    box-shadow 0.18s cubic-bezier(0.4, 0.2, 0.2, 1);
  &:hover {
    filter: brightness(0.95);
    transform: scale(1.06);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.18);
  }
  @media (min-width: 800px) {
    font-size: 1.3rem;
    padding: 16px 72px;
  }
`;
