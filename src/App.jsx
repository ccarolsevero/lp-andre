import Section from './components/Section';
import Section2 from './components/Section2';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Flowchart from './components/Flowchart';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default function App() {
  const [sectionDone, setSectionDone] = useState(false);

  return (
    <AppContainer>
      <Navbar />
      <Section onAnimationComplete={() => setSectionDone(true)} />
      <Flowchart animate={sectionDone} />
      <Section2 />
      <Footer />
    </AppContainer>
  );
}
