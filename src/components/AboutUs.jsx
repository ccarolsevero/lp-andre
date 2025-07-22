import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

export default function AboutUs() {
  return (
    <PageContainer>
      <Navbar />
      <Content>
        <Title>About Us</Title>
        <Description>
          With a very talented team with a long track of successful projects
          delivered across multiple industries, we believe we can change the AI
          landscape by providing powerful tools to enable companies to enter the
          AI era with truly impactful projects.
        </Description>
      </Content>
      <Footer />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #111;
  padding: 32px 8px 32px 8px;
  @media (min-width: 800px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 24px;
`;

const Description = styled.p`
  color: #8a8a8a;
  font-size: 1.1rem;
  max-width: 600px;
  text-align: center;
`;
