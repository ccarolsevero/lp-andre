import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.7,
      ease: [0.4, 0.2, 0.2, 1],
    },
  }),
};

export default function AboutUs() {
  return (
    <PageContainer>
      <Navbar />
      <Content>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          custom={0.2}
        >
          <Title>About Us</Title>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          custom={0.6}
        >
          <Description>
            With a very talented team with a long track of successful projects
            delivered across multiple industries, we believe we can change the
            AI landscape by providing powerful tools to enable companies to
            enter the AI era with truly impactful projects.
          </Description>
        </motion.div>
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
  min-height: calc(100vh - 48px); /* 48px = altura do Footer */
  box-sizing: border-box;
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
