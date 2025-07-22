import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Jobs() {
  return (
    <PageContainer>
      <Navbar />
      <Section>
        <Title>Fullstack Software Engineer</Title>
        <Description>
          We’re looking for an experienced jack-of-all-trades, comfortable with
          backend and frontend development, and willing to be part of an A+ team
          for whom software engineering is an art form.
        </Description>
      </Section>
      <FlowchartSection>
        <FlowchartTitle>What we’re looking for:</FlowchartTitle>
        <FlowchartList>
          <FlowchartItem>
            7+ years of experience developing high traffic web applications{' '}
          </FlowchartItem>
          <FlowchartItem>Proficiency with docker and kubernetes</FlowchartItem>
          <FlowchartItem>Experience writing unit tests</FlowchartItem>
          <FlowchartItem>
            Familiarity with at least one backend development language, like
            Java or PHP
          </FlowchartItem>
          <FlowchartItem>Strong skills with React</FlowchartItem>
        </FlowchartList>
      </FlowchartSection>
      <Section2>
        <Section2Title>Why us?</Section2Title>

        <JobDescription>
          We believe that we can change the world by tackling difficult
          problems, and we’ll learn a lot during the process. We value
          excellence over velocity and we do not fear hard tasks. We believe in
          building a great team before processes and bureaucracy.
        </JobDescription>
      </Section2>
      <Footer />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 30vh;
  margin-top: 40px;
  background: #111;
  color: #eee;
  padding: 32px 8px 32px 8px;
  @media (min-width: 800px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 24px;
  background: linear-gradient(180deg, #e0e0e0 0%, #8a8a8a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent !important;
  background-clip: text;
  color: transparent !important;
  width: 100%;
  display: inline-block;
  text-align: center;
`;

const Description = styled.p`
  color: #8a8a8a;
  font-size: 1.1rem;
  max-width: 600px;
  text-align: center;
`;

const FlowchartSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #111;
  padding: 16px 8px 16px 8px;
`;

const FlowchartTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 24px;
  color: #fff;
  text-align: center;
`;

const FlowchartList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FlowchartItem = styled.li`
  background: #232222;
  color: #fff;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  min-width: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.18s cubic-bezier(0.4, 0.2, 0.2, 1),
    box-shadow 0.18s cubic-bezier(0.4, 0.2, 0.2, 1);
  cursor: pointer;
  &:hover {
    transform: scale(1.06);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.18);
  }
`;

const Section2 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #111;
  padding: 32px 8px 32px 8px;
  @media (min-width: 800px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }
`;

const Section2Title = styled.h2`
  font-size: 1.5rem;
  color: #bdbdbd;
  margin-bottom: 16px;
  font-weight: 700;
  @media (min-width: 800px) {
    font-size: 2rem;
  }
`;

const JobTitle = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 16px;
`;

const JobDescription = styled.p`
  color: #8a8a8a;
  font-size: 1.1rem;
  max-width: 600px;
  text-align: center;
  margin-bottom: 18px;
`;

const SectionSubtitle = styled.h3`
  color: #bdbdbd;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 18px 0 10px 0;
`;
