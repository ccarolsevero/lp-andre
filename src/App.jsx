import Section from './components/Section';
import Section2 from './components/Section2';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Flowchart from './components/Flowchart';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25 + 0.2,
      duration: 0.7,
      ease: [0.4, 0.2, 0.2, 1],
    },
  }),
};

export default function App() {
  return (
    <AppContainer>
      <Navbar />
      <motion.div
        custom={0}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <Section />
      </motion.div>
      <motion.div
        custom={1}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <Flowchart />
      </motion.div>
      <motion.div
        custom={2}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <Section2 />
      </motion.div>
      <motion.div
        custom={3}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <Footer />
      </motion.div>
    </AppContainer>
  );
}
